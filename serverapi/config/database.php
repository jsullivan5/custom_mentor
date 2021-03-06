<?php
//session_start();

class Database{


    public $conn;
    // get the database connection
    public function __construct() {

        $this->conn = null;
		$this->host = $_SERVER['RDS_HOSTNAME'];
		$this->db_name = $_SERVER['RDS_DB_NAME'];
		$this->username = $_SERVER['RDS_USERNAME'];
		$this->password = $_SERVER['RDS_PASSWORD'];
		$this->port = $_SERVER['RDS_PORT'];

        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        //return $this->conn;
    }
}

?>
