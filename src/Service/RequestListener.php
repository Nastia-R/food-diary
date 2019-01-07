<?php

namespace App\Service;

use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class RequestListener
{
	public function onKernelRequest(GetResponseEvent $event)
	{
		$request = $event->getRequest();
		session_write_close();

		if (false === strpos($request->headers->get('content-type'), 'application/json')) {
		    return;
        }

        $parameters = json_decode($request->getContent(),true);

        if (is_null($parameters)) {
            $errorCode = json_last_error();

            if ($errorCode !== JSON_ERROR_NONE) {
                throw new BadRequestHttpException(json_last_error_msg(), null, $errorCode);
            }
        }

        if (is_array($parameters)) {
            $request->request->add($parameters);
        }
	}
}
	
