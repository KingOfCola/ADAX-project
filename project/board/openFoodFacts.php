<?php include("../core/meta.php");?>
<!-- Tests -->
    <script src="../scripts/documentLoad/openFoodFacts.js"></script> 
    <div class="w3-rest w3-cell w3-container">
        <div id="list-selector">
            <select name="list-name">
                <?php 
                $listNames = [
                    "codes" => "Bar codes",
                    "brands" => "Brands",
                    "countries" => "Countries",
                    "ingredients" => "Ingredients",
                    "stores" => "Stores",
                    "purchase-places" => "Purchase Places",
                    "categories" => "Categories",
                    "manufacturing_places" => "Manufacturing places",
                    "origins" => "Origin of ingredients",
                    "cities" => "Cities",
                    "nutrition-grades" => "Nutrition grades",
                    "nutrient-levels" => "Nutrient levels",
                    "packaging" => "Packagings",
                    "emb_codes" => "EMB codes - Packager codes",
                    "packager-codes" => "Packager codes"
                ];
                foreach ($listNames as $name => $label) {
                    ?>
                    <option value="<?php echo($name); ?>"><?php echo($label); ?></option>
                    <?php
                }
                ?>
            </select>
        </div>
        <div id="mainBox"></div>
    </div>
    <div class="w3-quarter w3-cell w3-container w3-red">
        <p> </p>
    </div>
<?php include("../core/tail.php"); ?>