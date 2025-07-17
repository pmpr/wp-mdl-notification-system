<?php
/*   _______________________________________
    |  Obfuscated by PMPR - Php Obfuscator  |
    |             68797250c84c2             |
    |_______________________________________|
*/
 namespace Pmpr\Module\NotificationSystem\Event\Birthday; use Pmpr\Module\NotificationSystem\Event\AbstractProcess; use Pmpr\Module\NotificationSystem\Setting; class Process extends AbstractProcess { const moiogqgkmeyqgsqi = self::csqsymqoqwyowokg . 'notify_users_birthday_job'; public function hkwaeoyeusmoweuu() : int { $ygykagaqyuawwiyo = $this->weysguygiseoukqw(Setting::equkyoomqaayisee, '8am'); return $this->ooosmymooksgmyos(strtotime($ygykagaqyuawwiyo), DAY_IN_SECONDS, self::moiogqgkmeyqgsqi); } }
