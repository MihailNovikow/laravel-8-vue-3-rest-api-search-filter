<?php


namespace App\Http\Filters;


use Illuminate\Database\Eloquent\Builder;

class AdFilter extends AbstractFilter
{
    public const NAME = 'name';
    public const URL = 'url';
    public const PRICE = 'price';


    protected function getCallbacks(): array
    {
        return [
            self::NAME => [$this, 'name'],
            self::URL => [$this, 'url'],
            self::PRICE => [$this, 'price'],
        ];
    }

    public function name(Builder $builder, $value)
    {
        $builder->where('name', 'like', "%{$value}%");
    }

    public function url(Builder $builder, $value)
    {
        $builder->where('url', 'like', "%{$value}%");
    }

    public function price(Builder $builder, $value)
    {
        $builder->where('price', $value);
    }
}