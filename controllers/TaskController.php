<?php
/**
 * Created by PhpStorm.
 * User: sion
 * Date: 12.11.2016
 * Time: 17:40
 */
namespace app\controllers;

use yii\rest\ActiveController;

class TaskController extends ActiveController
{
    public $modelClass = 'app\models\Task';
}
