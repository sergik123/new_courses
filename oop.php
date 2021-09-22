<?php

interface TypeOfAnimal
{
    public function getSay();
}


class AnimalManager
{
    private $type;
    private $name;

    public function __construct(TypeOfAnimal $type, $name)
    {
        $this->type = $type;
        $this->name = $name;
    }

    public function say()
    {
        $this->type->getSay();
    }

    public function getMyName()
    {
        echo "My name is" . $this->name;
    }
}

class Mammals implements TypeOfAnimal
{
    public function getSay()
    {
        echo "I walk on land.\n";
    }

}

class Animals implements TypeOfAnimal
{
    public function getSay()
    {
        echo "I can walk anywhere.\n";
    }
}

class Humaniform implements TypeOfAnimal
{
    public function getSay()
    {
        echo "I'm almost human.\n";
    }
}

class Human implements TypeOfAnimal
{
    public function getSay()
    {
        echo "I'm human.\n";
    }
}

$type = new Mammals();
$manager = new AnimalManager($type, 'Horse');

$manager->say();
$manager->getMyName();