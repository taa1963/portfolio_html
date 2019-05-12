<?php
require "vendor/autoload.php";


use Spipu\Html2Pdf\Html2Pdf;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Exception\ExceptionFormatter;

try {
    $content = file_get_contents('example.php');



    $html2pdf = new Html2Pdf('P', 'A4', 'en',true, 'UTF-8');
    $html2pdf->setDefaultFont('Times');
//    $html2pdf->addFont('RobotoLight', '', './fonts/RobotoLight/RobotoLight.woff');
//    $html2pdf->
    $html2pdf->writeHTML($content);
    $html2pdf->output('emple.pdf');
} catch (Throwable $e) {
//    $html2pdf->clean();
//    $formatter = new ExceptionFormatter($e);
    echo $e->getMessage();die;
}