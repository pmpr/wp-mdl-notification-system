<?php
/*   _______________________________________
    |  Obfuscated by PMPR - Php Obfuscator  |
    |             68729e5e5d855             |
    |_______________________________________|
*/
 namespace Pmpr\Module\NotificationSystem\Event\Birthday; use Pmpr\Module\NotificationSystem\Event\AbstractProcess; use Pmpr\Module\NotificationSystem\Setting; class Process extends AbstractProcess { const moiogqgkmeyqgsqi = 'notify_users_birthday_job'; public function hkwaeoyeusmoweuu() : int { $ygykagaqyuawwiyo = $this->weysguygiseoukqw(Setting::equkyoomqaayisee, '8am'); return $this->ooosmymooksgmyos(strtotime($ygykagaqyuawwiyo), DAY_IN_SECONDS, self::moiogqgkmeyqgsqi); } }
