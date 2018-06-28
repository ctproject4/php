<?php

require("ecomm_project/config1.php");
class ConfigTest extends PHPUnit_Framework_TestCase
	{
		public function testHostconfiguration()
		{
			$this->assertEquals('ecomm.cm1y1sbwabts.us-east-2.rds.amazonaws.com', Config::HOST);
		}
		public function testUserconfiguration()
		{
			$this->assertEquals('akah', Config::USER);
		}
		public function testPasswordconfiguration()
		{
			$this->assertEquals('Password_123', Config::PASSWORD);
		}
		public function testHelperconfiguration()
		{
			$this->assertEquals('Helper.php', Config::HELPER);
		}
	}
		
?>
