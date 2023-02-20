<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    if ($_SERVER['REQUEST_METHOD'] == "OPTIONS")
        die();
    
    if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
        http_response_code(405);
        echo json_encode([
            'success' => 0,
            'message' => 'Bad Request detected! Only PUT method is allowed',
        ]);
        exit;
    }

    require 'Connection.php';
// To receive JSON string we can use the “php://input” along with the function   file_get_contents() which helps us receive JSON data as a file and read it into a string. Later, we can use the json_decode() function to decode the JSON string.
    $data = json_decode(file_get_contents("php://input"));

    if (!isset($data->id)) {
        echo json_encode([
            'success' => 0, 
            'message' => 'Please enter correct product id.']);
        exit;
    }

    $query = "SELECT * FROM product WHERE id={$data->id}";
    $result = mysqli_query($db, $query);
    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        $name = isset($data->name)? $data->name: $row['name'];
        $description = isset($data->description)? $data->description: $row['description'];
        $category = isset($data->category)? $data->category: $row['cid'];
        $image = isset($data->image)? $data->image: $row['image'];

        $name = htmlspecialchars(strip_tags($name));
        $description = htmlspecialchars(strip_tags($description));
        $category = htmlspecialchars(strip_tags($category));
        $image = htmlspecialchars(strip_tags($image));

        $query_update= "update product 
                    set name='$name',
                        description='$description',cid='$category',image='$image'
                    where id = {$data->id}";
        mysqli_query($db, $query_update);
        if(mysqli_affected_rows($db) > 0){
            echo json_encode([
                'success' => 1,
                'message' => 'Record updated successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Did not udpate. Something went  wrong.'
        ]);
        exit;
    }
    else{
        echo json_encode([
            'success' => 0, 
            'message' => 'Invalid ID. No record found by the ID.']);
        exit;
    }
 ?>
