class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2,
			//posB: {x: this.offsetX, y: this.offsetY}
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
       // this.offsetY = offsetY
	}

	display()
	{
		var posA=this.rope.bodyA.position;
		var posB=this.rope.bodyB.position;

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		var positionA = posA.x;
		var positionB = posA.y;
		var positionC = posB.x + this.offsetX;
		var positionD = posB.y;

		line(positionA,positionB,positionC,positionD)


	}

}