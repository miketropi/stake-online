<?php

namespace Packages\Baccarat\Http\Requests;

use App\Http\Requests\PlayGame;
use Packages\Baccarat\Models\Baccarat;

class Play extends PlayGame
{
    protected $gamePackageId = 'baccarat';
    protected $gameableClass = Baccarat::class;

    public function rules()
    {
        return array_merge(
            ['hash' => 'required|size:64'],
            collect(['player_bet', 'banker_bet', 'tie_bet'])
                ->mapWithKeys(function ($field) {
                    return [$field => 'present|nullable|integer|min:' . config($this->gamePackageId . '.min_bet') . '|max:' . config($this->gamePackageId . '.max_bet')];
                })
                ->toArray()
        );
    }
}
