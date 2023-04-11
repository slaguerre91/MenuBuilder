<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Menu Builder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://kit.fontawesome.com/40cafce315.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <h1 class="text-center mt-4">Menu <i class="fa-solid fa-utensils"></i> Builder</h1>
        <div class="row d-flex justify-content-center mt-4">
            <div class="col-lg-6">
                <div class="input-group mb-3">
                    <input type="text" id="search" class="form-control" placeholder="Search for a food item (i.e. pepperoni pizza, caesar salad...)" aria-label="food" aria-describedby="food">
                    <div class="input-group-prepend" id="submit">
                        <span class="input-group-text h-100"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <h2>My Menu</h2>
        <div>
            <table class="table table-responsive table-hover">
                <div class="row">
                    <thead>
                        <tr>
                            <th class="col-4">Name</th>
                            <th class="col-2">Calories</th>
                            <th class="col-2">Protein</th>
                            <th class="col-2">Carbs</th>
                            <th class="col-2">Fat</th>
                        </tr>
                    </thead>
                </div>
                <tbody id="menu">
                <tbody>
            </table>
        </div>
        <h2>Search Results</h2>
        <div>
            <table class="table table-responsive table-hover">
                <div class="row">
                    <thead>
                        <tr>
                            <th class="col-4">Name</th>
                            <th class="col-2">Calories</th>
                            <th class="col-2">Protein</th>
                            <th class="col-2">Carbs</th>
                            <th class="col-2">Fat</th>
                        </tr>
                    </thead>
                </div>
                <tbody id="results">
                <tbody>
            </table>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="js/app.js"></script>
</body>

</html>