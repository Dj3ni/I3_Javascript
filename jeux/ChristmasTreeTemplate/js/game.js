let config = { //objet
    type: Phaser.AUTO,
    width: 610,
    height: 900,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload : preload,     
        create: create,     
        update : update   
    }
};

let game = new Phaser.Game(config);
let snowflakes;
let stars;
let bellsImage;
let XmasMusic;
let snowflakeTimer;
let giantSnowflakeImage;
let giftImage4;
let bearText;


function preload() { //va télécharger tous les fichiers afin d'améliorer la fluidité
    this.load.image('background', './assets/images/back_2.png');
    this.load.image('snowman', './assets/images/obj/obj_18.png');
    this.load.image('tree', './assets/images/tree_2.png');
    this.load.image('ribbon', './assets/images/ribbon.png');
    this.load.image('ribbonClear', './assets/images/ribbonClear.png');
    this.load.image('snowflake', './assets/images/snowflake.png');
    this.load.image('star', './assets/images/obj/star.png');
    this.load.image('teddybear', './assets/images/obj/obj_05.png');
    this.load.image('treeknot', './assets/images/obj/obj_25.png');
    this.load.image('boule1', './assets/images/obj/obj_21.png');
    this.load.image('boule2', './assets/images/obj/obj_08.png');
    this.load.image('cadeau', './assets/images/obj/obj_19.png');
    this.load.image('cadeauXs', './assets/images/obj/obj_09.png');
    this.load.image('cadeauRose', './assets/images/obj/obj_13.png');
    this.load.image('cadeauBlanc', './assets/images/obj/obj_14.png');
    this.load.image('giantSnowflake', './assets/images/obj/obj_10.png');
    this.load.image('sock', './assets/images/obj/obj_07.png');
    this.load.image('bells', './assets/images/obj/obj_02.png');

    this.load.audio('XmasMusic', "./assets/audio/christmasMusic.mp3")
}

function create() { //va servir à créer la scène de base 
// Fond
    let backImage = this.add.image(0, 0, 'background'); //0,0 est point origine de l'écran (x et y)
    backImage.setOrigin(0, 0); //changer le point d'ancrage de l'image ( par défaut c'est le centre de l'image)
    backImage.setScale(0.5);

    // let snowmanImage = this.add.image(550, 600, "snowman");
    // snowmanImage.setScale(0.2);

// Sapin
    let treeImage = this.add.image(300, 450, 'tree');// ou config.width/2, config.height/2    
    treeImage.setScale(0.5);

    let ribbonImage = this.add.image(280,450, 'ribbon');
    ribbonImage.setScale(0.5);
    
    let ribbonClearImage = this.add.image(280,450, 'ribbonClear');
    ribbonClearImage.setScale(0.5);
    
    let tweenRibbon = this.tweens.add({
        targets: ribbonClearImage,//objet visé par le tween
        alpha: 0, //valeur de transparence que je veux atteindre
        duration: 1000, //en milisecondes
        ease: 'Power2', //permet de calculer la manière dont on part d'une valeur à une autre
        yoyo: true,
        loop: -1, // va boucler à l'infini
        });
    
    // let knotImage = this.add.image(290, 180, 'treeknot')

    let boule1Image = this.add.image(450, 600, 'boule1')
    boule1Image.setScale(0.5);
    let boule1Image2 = this.add.image(200, 450, 'boule1')
    boule1Image2.setScale(0.5);

    let boule2Image = this.add.image(400, 480, 'boule2')
    boule2Image.setScale(0.5);
    let boule2Image2 = this.add.image(150, 600, 'boule2')
    boule2Image2.setScale(0.5);
    
    giantSnowflakeImage = this.add.image(290, 100, 'giantSnowflake').setInteractive();
    giantSnowflakeImage.setScale(0.5);
    giantSnowflakeImage.alpha = 0.3;
    giantSnowflakeImage.on("pointerdown",snowflakeTimerClick);


// Flocons
    snowflakes = this.physics.add.group({
        defaultKey: 'snowflake',
        maxSize: 60 //quantité de flocons
        });  

    snowflakeTimer = this.time.addEvent({
        delay: 250, //délais avant prochain appel à fonction
        callback: letItSnow,
        repeat: -1,
    })



// Etoile clignote

    stars = this.add.group({
        defaultKey: "star",
        maxSize: 20,
    })

    // let starsTimer = this.time.addEvent({
    //     delay: 50,
    //     callback: letItShine,
    //     repeat: -1,
    // })
    let starImage = this.add.image(100,100, 'star');
    let starImage2 = this.add.image(300,50, 'star');
    
    let tweenStar = this.tweens.add({
        targets: starImage,//objet visé par le tween
        alpha: 0, //valeur de transparence que je veux atteindre
        duration: 1000, //en milisecondes
        ease: 'Power2', //permet de calculer la manière dont on part d'une valeur à une autre
        yoyo: true,
        loop: -1, // va boucler à l'infini
        });

    

// Cadeaux
    let giftImage = this.add.image(500, 800, 'cadeau');
    let giftImage3 = this.add.image(280, 800, 'cadeau');
    giftImage3.setScale(0.4);
    let giftImage2 = this.add.image(350, 800, 'cadeau');
    giftImage2.setScale(0.5);   
    
    let giftImage5 = this.add.image(50, 800, 'cadeauBlanc');
    giftImage5.setScale(0.5);  
    
    // let sockImage = this.add.image(50, 800, 'sock');
    // sockImage.setRotation(270);

    let bearImage = this.add.image(400, 800, 'teddybear').setInteractive();
    bearImage.on("pointerdown", bearImageClick); // = fonction évènement comme addEvent listener
    bearText = this.add.text(160,50,"Bravo, vous avez gagné un copain!",
        {
            fontSize: 18,
            color: "white",
            fontFamily: "Arial"
        }
    )
    bearText.alpha = 0;


    // Musique
    XmasMusic = this.sound.add("XmasMusic");
    bellsImage = this.add.image(170, 820, 'bells')
    bellsImage.setScale(0.7);

    giftImage4 = this.add.image(170, 800, 'cadeauRose').setInteractive();
    giftImage4.setScale(0.7);
    giftImage4.alpha = 0.9;
    giftImage4.on("pointerdown", giftTransparency);
    


}

function update() { //appelée toutes les 16 milisecondes, car on vise 60 FPS
    // Vérifie si un flocon est sorti de l'écran, alors on le détruit
    snowflakes.getChildren().forEach(
        function(snowflake) {
            if (snowflake.y>980) snowflake.destroy();
        }, this);
}

function letItSnow(){
    let snowflake = snowflakes.get();
    if (snowflake) {
        snowflake.setPosition(Phaser.Math.Between(10, 590), -10);
        snowflake.setVelocity(0,100);
    }
}

function bearImageClick(){
    if(bearText.alpha === 0){
        bearText.alpha = 1;
    }
    else{
        bearText.alpha = 0;
    }
}

function giftTransparency(){
    if(giftImage4.alpha === 0.9){
        bellsImage.alpha = 0.3;
        XmasMusic.pause();
    }
    else{
        giftImage4.alpha = 0.3
        bellsImage.alpha = 1;
        XmasMusic.play();
    }
} 

function snowflakeTimerClick(){
    if(giantSnowflakeImage.alpha === 0.3){
        giantSnowflakeImage.alpha = 1;
        snowflakeTimer.paused = false;
    }
    else{
        giantSnowflakeImage.alpha = 0.3;
        snowflakeTimer.paused = true;
    }
}


// function letItShine(){
//     let star = stars.get();
//     while (const star of stars) {
//         star.setPosition(Phaser.Math.Between(10, 590), (0,300));
//         let tweenStar = this.tweens.add({
//             targets: star,//objet visé par le tween
//             alpha: 0, //valeur de transparence que je veux atteindre
//             duration: 1000, //en milisecondes
//             ease: 'Power2', //permet de calculer la manière dont on part d'une valeur à une autre
//             yoyo: true,
//             loop: -1, // va boucler à l'infini
//             });
//     }
    
//     // if (star){
        
        
//     // }
// }