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

function preload() { //va télécharger tous les fichiers afin d'améliorer la fluidité
    this.load.image('background', './assets/images/back_2.png');
    this.load.image('tree', './assets/images/tree_2.png');
    this.load.image('ribbon', './assets/images/ribbon.png');
    this.load.image('ribbonClear', './assets/images/ribbonClear.png');
    this.load.image('snowflake', './assets/images/snowflake.png');
    this.load.image('poleStar', './assets/images/obj/star.png');
    this.load.image('teddybear', './assets/images/obj/obj_05.png');
    this.load.image('treeknot', './assets/images/obj/obj_25.png');
    this.load.image('boule1', './assets/images/obj/obj_21.png');
    this.load.image('cadeau', './assets/images/obj/obj_19.png');
    this.load.image('cadeauXs', './assets/images/obj/obj_09.png');
    this.load.image('sock', './assets/images/obj/obj_07.png');


}

function create() { //va servir à créer la scène de base 
// Fond
    let backImage = this.add.image(0, 0, 'background'); //0,0 est point origine de l'écran (x et y)
    backImage.setOrigin(0, 0); //changer le point d'ancrage de l'image ( par défaut c'est le centre de l'image)
    backImage.setScale(0.5);

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
    
    let knotImage = this.add.image(290, 180, 'treeknot')

    let boule1Image = this.add.image(450, 600, 'boule1')
    boule1Image.setScale(0.5);
    let boule1Image2 = this.add.image(200, 450, 'boule1')
    boule1Image2.setScale(0.5);

// Flocons
    snowflakes = this.physics.add.group({
        defaultKey: 'snowflake',
        maxSize: 60 //quantité de flocons
        });  

    let snowflakeTimer = this.time.addEvent({
        delay: 250, //délais avant prochain appel à fonction
        callback: letItSnow,
        repeat: -1,
    })

// Etoile clignote
    let starImage = this.add.image(100,100, 'poleStar');
    let starImage2 = this.add.image(300,50, 'poleStar');
    
    let tweenStar = this.tweens.add({
        targets: {starImage, starImage2},//objet visé par le tween
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
    let bearImage = this.add.image(400, 800, 'teddybear');
    let sockImage = this.add.image(200, 800, 'sock');
    sockImage.setRotation(270);
    
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