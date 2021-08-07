<?php
define("host","mysql9.000webhost.com");
define("user","a5790598_tv");
define("pass","0779165619BI");
define("db","a5790598_tv");
class db_all{

public $conn;
function __construct(){
$this->con=new mysqli(host,user,pass,db);
	if($this->con->connect_error){
		die("error");
	}
}
	function close_conn(){
		$this->con->close();
		
	}
	function listall_support(){
	$res=$this->con->query("SELECT id,name,image FROM matrixusers WHERE id>2");
	$r_data="";
	$count=1;
while($row=$res->fetch_assoc()){
	$data="No ".$count." Supporter "." ".$row['name'];
	//echo $data,$count;
	$r_data.="<div class='suser_img_holder'><img class='suser_img' src='".$row['image']."' data-toggle='popover' data-trigger='hover' data-content='".$data."'></div>";
	
	$count++;
}
echo $r_data;
//echo "ok";
	}
	
	function user_access($userid){
		$res=$this->con->query("SELECT id,name,image FROM matrixusers WHERE id='$userid' ");
		$row=$res->fetch_array();
		echo $row['id'],"@bi@",$row['name'],"@bi@",$row['image'];
	}
	function user_insert($name,$image,$email,$other){
		$rowcheck=$this->con->query("SELECT * FROM matrixusers WHERE email='$email' ");
		if($rowcheck->num_rows<=0){
		$sql="INSERT INTO matrixusers(id,name,image,email,showother) VALUES('','$name','$image','$email','$other')";
		
		if($this->con->query($sql)===TRUE){
			echo $this->user_access($this->con->insert_id);
		}else{
			
			echo "No";
		}
		}
		else{
			//echo "already register";
			$result=$rowcheck->fetch_assoc();
			 $this->user_access($result["id"]);
		}
	}
}

$db=new db_all();
//$db->user_access(1);


if(isset($_POST['user_id'])){
	$db->user_access($_POST["user_id"]);
	echo $_POST['user_id'];
}elseif(isset($_POST['regsign'])){
	$db->user_insert($_POST['name'],$_POST['image'],$_POST['email'],1);
}
elseif(isset($_POST['listall'])){
	$db->listall_support();
}
$db->close_conn();