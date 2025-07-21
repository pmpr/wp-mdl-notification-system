<?php
/*   _______________________________________
    |  Obfuscated by PMPR - Php Obfuscator  |
    |             687eace567115             |
    |_______________________________________|
*/
 namespace Pmpr\Module\NotificationSystem; use Pmpr\Common\Foundation\Container\ModuleInitiator; use Pmpr\Common\Foundation\Interfaces\Constants; use Pmpr\Module\NotificationSystem\Event\Event; use Pmpr\Module\NotificationSystem\Model\Audience; use Pmpr\Module\NotificationSystem\Model\Onetime; use Pmpr\Module\NotificationSystem\Model\UserNotification; use Pmpr\Module\NotificationSystem\REST\REST; class NotificationSystem extends ModuleInitiator { const uikmgymgsuiwsywq = 'notification_system'; const PREFIX = self::uikmgymgsuiwsywq . Constants::wassgkgmoyygyaya; public function register() { $this->gkieogwukagigisy(__DIR__, [Constants::qescuiwgsyuikume => static function () { return __('Notification System', PR__MDL__NOTIFICATION_SYSTEM); }, Constants::sguyaymiiiiewame => Setting::class]); } public function mameiwsayuyquoeq() { Event::symcgieuakksimmu(); AdminBar::symcgieuakksimmu(); $owaoeyikmqaeegma = $this->caokeucsksukesyo()->owicscwgeuqcqaig(); if ($owaoeyikmqaeegma->awumyiewiaosiyyy()) { Onetime::symcgieuakksimmu(); Audience::symcgieuakksimmu(); UserNotification::symcgieuakksimmu(); } if ($owaoeyikmqaeegma->mcgoysmkqsqooceq(self::PREFIX)) { Ajax::symcgieuakksimmu(); } } }
