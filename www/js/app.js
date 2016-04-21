function init() {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);
    
    // Light
    var spot = new BABYLON.PointLight("spot", new BABYLON.Vector3(0, 40, 0), scene);
    spot.diffuse = new BABYLON.Color3(1, 1, 1);
    spot.specular = new BABYLON.Color3(0, 0, 0);

    // Camera
    var camera = new BABYLON.ArcRotateCamera("camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Ground
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture =  BABYLON.Texture.CreateFromBase64String(covermapImage, "ground", scene); 
    groundMaterial.backFaceCulling = false;

    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", heightmapImage, 200, 100, 256, -10.921, 8.848, scene, false);
    ground.material = groundMaterial;
    ground.rotation.y = -Math.PI / 2;
    ground.rotation.x = 0;


    // // Water
    var waterMaterial = new BABYLON.StandardMaterial("waterMaterial", scene);
    waterMaterial.diffuseTexture = BABYLON.Texture.CreateFromBase64String(waterImage, "water", scene); 
    waterMaterial.backFaceCulling = false;
    // // water plane
    var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 200, 100, 32, scene, false);
    waterMesh.material = waterMaterial;
    waterMesh.rotation.y = Math.PI / 2;
    waterMesh.rotation.x = 0;

    // Skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 800, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    var cubeImages = [skyboxPXImage, skyboxPYImage, skyboxPZImage, skyboxNXImage, skyboxNYImage, skyboxNZImage];
    skyboxMaterial.reflectionTexture = BABYLON.CubeTexture.CreateFromImages(cubeImages, scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    
    engine.runRenderLoop(function () {
        fps++;
        var sealevel = Math.round(parseFloat(document.getElementById('seaLevel').value)) / 1000.0;
        waterMesh.position.y = sealevel;
        document.getElementById('seaLevelValue').innerText = Math.floor(sealevel * 1000.0) + ' meters';
        scene.render();
    });

    //performance optimization
    BABYLON.SceneOptimizer.OptimizeAsync(scene);

    // resize
    window.addEventListener("resize", function () {
        engine.resize();
    });

    //measure fps
    var fps = 0;
    setInterval(function () {
        document.getElementById('fps').innerText = fps;
        fps = 0;
    }, 1000);
}

function increaseSeaLevel() {
    var seaLevelInput = document.getElementById('seaLevel');
    seaLevelInput.value = parseFloat(seaLevelInput.value) + 1;
}

function decreaseSeaLevel() {
    var seaLevelInput = document.getElementById('seaLevel');
    seaLevelInput.value = parseFloat(seaLevelInput.value) - 1;
}