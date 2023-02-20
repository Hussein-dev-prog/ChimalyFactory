<?php
    header("Access-Control-Allow-Origin: *"); // to make the API public to anyone to access
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    // return only the headers and not the content
    if ($_SERVER['REQUEST_METHOD'] == "OPTIONS")
        die();
    
    if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
        http_response_code(405);
        echo json_encode([
            'success' => 0,
            'message' => 'Bad Request!.Only POST method is allowed',
        ]);
        exit;
    }
    require 'Connection.php';
    $data = json_decode(file_get_contents("php://input"));
    if (!isset($data->name) || !isset($data->description) || !isset($data->category) || !isset($data->image)){
        echo json_encode([
            'success' => 0,
            'message' => 'All fields are required',
        ]);
        exit;
    }
    elseif (empty(trim($data->name)) || empty(trim($data->description)) || empty(trim($data->category)) || empty(trim($data->image))){
        echo json_encode([
            'success' => 0,
            'message' => 'Field cannot be empty. Please fill all the fields.',
        ]);
        exit;
    }
    $name = htmlspecialchars(trim($data->name));
    $description = htmlspecialchars(trim($data->description));
    $category = htmlspecialchars(trim($data->category));
    $image = htmlspecialchars(trim($data->image));
    $query = "INSERT INTO product values (null, 
            '$name',  '$description', '$category','$image')";
    mysqli_query($db, $query);
    if(mysqli_affected_rows($db)>0){
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Product Inserted Successfully.'
        ]);
        exit;
    }
    echo json_encode([
        'success' => 0,
        'message' => 'There is some problem in data inserting'
    ]);
    exit;
 ?>
