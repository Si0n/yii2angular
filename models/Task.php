<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "task".
 *
 * @property integer $task_id
 * @property string $info
 * @property string $client
 * @property string $date
 * @property string $time_spent
 * @property string $over_time
 * @property string $date_added
 * @property string $date_modified
 */
class Task extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'task';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['time_spent', 'over_time', 'date_added', 'date_modified'], 'safe'],
            [['info'], 'string', 'max' => 255],
            [['client'], 'string', 'max' => 75],
            [['date'], 'string', 'max' => 55],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'task_id' => 'Task ID',
            'info' => 'Info',
            'client' => 'Client',
            'date' => 'Date',
            'time_spent' => 'Time Spent',
            'over_time' => 'Over Time',
            'date_added' => 'Date Added',
            'date_modified' => 'Date Modified',
        ];
    }
}
