<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

require 'Connection.php';
$sql =   isset($_GET['id']) ? "SELECT * FROM `product` WHERE id='{$_GET['id']}'" :"SELECT * FROM `product`";   
    $res = mysqli_query($db,$sql);
    if(mysqli_num_rows($res)>0){
        $data = array();
        while($row = mysqli_fetch_assoc($res))
         $data[] = $row; 

        echo json_encode([
            'success' => 1,
            'output' => $data,
        ]);
    }
    else 

        echo json_encode([
            'success' => 0,
            'message' => 'No Record Found!',
        ]);
?>
