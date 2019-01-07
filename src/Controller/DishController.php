<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/api/dishes")
 */
class DishController extends BaseController
{
    /**
     * @Route("/")
     * @Method("GET")
     *
     * @return JsonResponse
     */
    public function getAll()
    {
        return new JsonResponse([
            ['id' => 1, 'name' => 'Pizza pepperoni', 'calories' => 348],
            ['id' => 2, 'name' => 'French toast', 'calories' => 162],
            ['id' => 3, 'name' => 'Scrambled eggs', 'calories' => 89]
        ]);
    }

    /**
     * @Route("/{id}")
     * @Method("GET")
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function getOneById($id)
    {
        return new JsonResponse(['id' => $id, 'name' => 'French toast', 'calories' => 162]);
    }
}
