<?php

namespace Packages\Baccarat\Models;

use App\Models\Gameable;
use App\Models\ProvableGame;
use Illuminate\Database\Eloquent\Model;

class Baccarat extends Model implements ProvableGame
{
    use Gameable;

    const BET_TYPE_PLAYER   = 0;
    const BET_TYPE_TIE      = 1;
    const BET_TYPE_BANKER   = 2;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'games_baccarat';

    protected $attributes = [
        'player_bet' => 0,
        'player_win' => 0,
        'banker_bet' => 0,
        'banker_win' => 0,
        'tie_bet' => 0,
        'tie_win' => 0,
    ];

    /**
     * This format will be used when the model is serialized to an array or JSON.
     *
     * @var array
     */
    protected $casts = [
        'deck' => 'array',
        'player_bet' => 'integer',
        'banker_bet' => 'integer',
        'tie_bet' => 'integer',
        'player_win' => 'float',
        'banker_win' => 'float',
        'tie_win' => 'float',
        'player_hand' => 'array',
        'banker_hand' => 'array',
        'player_score' => 'integer',
        'banker_score' => 'integer',
    ];

    protected $appends = ['player_result', 'banker_result', 'win_type'];

    /**
     * Getter for player_result attribute
     *
     * @return string
     */
    public function getPlayerResultAttribute(): string
    {
        if ($this->player_score > $this->banker_score) {
            return __('Win');
        } else if ($this->player_score < $this->banker_score) {
            return __('Lose');
        } else {
            return __('Tie');
        }
    }

    /**
     * Getter for banker_result attribute
     *
     * @return string
     */
    public function getBankerResultAttribute(): string
    {
        if ($this->player_score < $this->banker_score) {
            return __('Win');
        } else if ($this->player_score > $this->banker_score) {
            return __('Lose');
        } else {
            return __('Tie');
        }
    }

    /**
     * Getter for win_type attribute
     *
     * @return int
     */
    public function getWinTypeAttribute(): int
    {
        if ($this->player_score > $this->banker_score) {
            return self::BET_TYPE_PLAYER;
        } else if ($this->player_score < $this->banker_score) {
            return self::BET_TYPE_BANKER;
        } else {
            return self::BET_TYPE_TIE;
        }
    }

    /**
     * Getter for secret_attribute attribute
     *
     * @return string
     */
    public function getSecretAttributeAttribute(): string
    {
        return 'deck';
    }

    /**
     * Getter for secret_attribute_hint attribute
     *
     * @return string
     */
    public function getSecretAttributeHintAttribute(): string
    {
        return __('The first N cards are removed from the top of the deck and placed under the remaining cards. N is the remainder of dividing the Shift value by 52.');
    }
}
