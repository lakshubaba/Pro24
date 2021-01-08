class dustbin
{
    constructor()
    {
        var options = {isStatic: true};

        this.LeftSide = Bodies.rectangle(500,600,20,80,options);
        this.LRwidth = 20;
        this.LRheight = 80;
        World.add(world, this.LeftSide);

        this.base = Bodies.rectangle(585,630,150,20,options);
        this.Bwidth = 150;
        this.Bheight = 20;
        World.add(world, this.base);

        this.RightSide = Bodies.rectangle(650,600,20,80,options);
        World.add(world, this.RightSide);
    }
    display()
    {
        var posL = this.LeftSide.position;
        fill('white');
        rect(posL.x, posL.y, this.LRwidth, this.LRheight);

        var posB = this.base.position;
        fill('white');
        rect(posB.x, posB.y, this.Bwidth, this.Bheight);

        var posR = this.RightSide.position;
        fill('white');
        rect(posR.x, posR.y, this.LRwidth, this.LRheight);
    }
}