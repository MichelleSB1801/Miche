function pkm(nombre, nivel, experiencia, vida, ataque, speed) {
	this.name=nombre
	this.ps=vida
	this.att=ataque
	this.spd=speed
	this.exp=experiencia
	this.lvl=nivel
	this.lvlup=function() {
		if (this.exp= this.exp + 50) {
			this.lvl+= 1
			this.ps += 20
			this.att += 2
			return true
		}else{
			return false
		}
	}
}


var EN1 = new pkm ('Pikachu', 0, 0, 100, 2, 10)
var EN2 = new pkm ('Bellsprout', 0, 0, 150, 5, 12)
var EN3 = new pkm ('Gastly', 0, 0, 160, 3, 14)
var EN4 = new pkm ('Sentret', 0, 0, 120, 5, 17)
var EN5 = new pkm ('Zigzagoon', 0, 0, 90, 2, 17)


var PJpk = new pkm('Gardevoir', 0, 0, 150, 10, 16)
var ENpk = [EN1, EN2, EN3, EN4, EN5]


	for (var i = 0; i < ENpk.length; i++) {
		var turno = 0
		if (PJpk.spd>=ENpk[i].spd) {
			turno=0
		}else{
			turno=1
		}

		while(PJpk.ps > 0 && ENpk[i].ps > 0){
			if (turno==0) {
				ENpk[i].ps=ENpk[i].ps-PJpk.att
				console.log('A ' + ENpk[i].name + ' le quedan ' + ENpk[i].ps + ' puntos de vida')
				turno=1
				if (ENpk[i].ps<=0) {
					console.log(ENpk[i].name + ' defeated')
					PJpk.exp += 30
					PJpk.lvlup()
				}
			}else{
				PJpk.ps=PJpk.ps-ENpk[i].att
				console.log('A ' + PJpk.name + ' le quedan ' + PJpk.ps + ' puntos de vida')
				turno=0
				if (PJpk.ps<=0) {
					console.log(PJpk.name + ' defeated')
					ENpk[i].exp += 30
					ENpk[i].lvlup()
				}
			}
		}
	}



/*function Char(name, health, attack, speed) {
  this.name = name
  this.health = health
  this.attack = attack
  this.speed = speed
}

var enemigo1 = new Char('Javascript', 100, 50, 10)
var enemigo2 = new Char('Juani', 100, 23, 10)
var enemigo3 = new Char('Guason', 100, 10, 10)
var enemigo4 = new Char('Pikachu', 100, 1, 100)
var enemigo5 = new Char('Rita', 100, 15, 1)

var nosotros = new Char('Ada', 100, 85, 30)
var enemigos = [enemigo1, enemigo2, enemigo3, enemigo4, enemigo5]

for (var i = 0; i < enemigos.length; i++) {
  var turno

  if (nosotros.speed >= enemigos[i].speed) {
    turno = 0
  } else {
    turno = 1
  }
  
  while(nosotros.health > 0 && enemigos[i].health > 0) {
    if (turno == 0) {
      enemigos[i].health = enemigos[i].health - nosotros.attack
      turno = 1
      if (enemigos[i].health <=  0) {
        console.log(enemigos[i].name + ' murio')
      }
    } else {
      nosotros.health = nosotros.health - enemigos[i].attack
      turno = 0
      if (nosotros.health <= 0) {
        console.log(nosotros.name + ' nos morimos')
      }
    }
  }
}*/