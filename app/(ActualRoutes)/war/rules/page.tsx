export default function Page() {
  return (
    <div className="rules py-10 px-96 font-extralight font-rubik">
      <div className="text-5xl text-red-600 font-bold">--IN-DEVELOPMENT--</div><br/><br/>
      <h1>General</h1>
      <p><b>
         - DURING YOUR TURN, AFTER 15 SECONDS MAX, IF YOU DON&#39;T DO ANYTHING, YOU WILL BE SKIPPED <br/>
        (womp womp) <br/>
         - This game is designed to be played with 5+ people<br/>
      </b></p>
      <hr className="big"/>
      <h2>Politics - Ways of rule<br/></h2>
      <ol className="list-inside">
        <li>
          <b> - Communism:</b><br/>
          - You don&#39;t have to pay your civilians, but you only get 50% of the money. Cv-Qol = 0.2
        </li>
        <li>
          <b> - Democracy:</b><br/>
          - Normal things, start with more educated people
        </li>
        <li>
          <b> - Fascism:</b><br/>
          - Everything will cost only 50%, but you have to pay your civilians 1.5 times as much and in ⅔ of the time<br/>
        </li>
        <li>
          <b> - Nazism:</b><br/>
          - Facism but money produces + 50% and you have to pay civilians twice as much every turn.<br/>
          - Because of extreme nationalism, units&#39; morale endurance is doubled and strength is increased by 25%
        </li>
      </ol>
      <hr className="smol"/>
      <h2>Movement cost - $75 / unit / cm<br/></h2>
      <p>
         - Units moved greater than 30 cm will experience significant morale loss.
      </p>
      <hr className="smol"/>
      <h2>Usage cost - $100 / unit / use<br/></h2>
      <p>
         - You may also blitz, where you can use units multiple times in one turn, <br/>
        but it will cost $(100 * uses^3).
      </p>
      <hr className="smol"/>
      <h2>Encirclement - Debuff (Passive)</h2>
      <p>
        Your opponent&#39;s morale is halved, while yours is doubled until encirclement is broken.
      </p>
      <hr className="smol"/>
      <h2>Cities - You can found a city for $1000<br/></h2>
      <p>
         - A military base is 10 medical tents, a military base and an airfield, but is still considered a city.<br/> 
         - It itself can hold 15 units, not counting the base, the tents, and the airfield, thus making up its garrison. <br/> 
         - In order to take an opponent&#39;s city, you need conduct a siege<br/> 
         - All cities start at a fortification class of I, and upgrading it costs $500<br/> 
         - All cities start with a population of 1000
      </p>
      <hr className="smol"/>
      <h2>Siege - Seiging</h2>
      <p>
         - The Fortification Class of cities determines how long it will take for an army to peirce its defences.<br/> 
         - Time = (FortClass * (garrisonMass + 2)) / OpponentStrength :
         - To increase a citiy&#39;s fortification class, it would take 5 turns and 5^previousFC
      </p>
      <hr className="smol"/>
      <h2>Civilians - Mechanic</h2>
      <p>
         - Every 3 turns except the first 6, you must pay $200 * (class)^2 / 2 to your civilians altogether<br/>
         - If you don&#39;t, after the next three turns you will have to play 2.5 times that<br/> 
         - If you still don&#39;t, then there will be a rebellion that I will control<br/><br/>
         - During a rebellion, you can choose to attempt to make peace. <br/>
         Then, all of the territory (and all the money makers inside it) <br/>
        towards the enemy from the furthest point of the rebellion is now the enemies. All military units are still yours, 
        but all structures (like airfields) are not. If you happen to have had a really low qol among the citizens (qol &lt; 0.2),
        the citizens would reject your offer and assasinate you, and you will lose the game.
         - Your money produced will be halved<br/><br/>
         - Civilians can also contribute to discoveries
         - If you have a population of 10K, qol 0.5, you would have a 1% chance discovery every round<br/>
         - CHANCE OF DISCOVERY PER TURN = (0.01 * POPULATION ^ QOL FACTOR)% 
         - Note: qolFactor = quality of life factor and ranges from 0-1<br/> 
         - So basically, you can either have a well educated and happy population for good stuff, <br/>
        or a sad and stupid population for money<br/> 
         - Education also slightly boosts army strength
      </p>
      <hr className="smol"/>
      <h2>Destroying</h2>
      <p>
         - You can choose to destroy structures, but not living units. <br/>
         - It&#39;s free :) <br/>
         - Destroying structures will not give you any money.<br/>
         - Feel free to trade (structures only), but movement cost for transport will be doubled.<br/>
      </p>
      <hr className="smol"/>
      <h2>Damage - redirection and knockback</h2>
      <p>
         - If you want to attack more than one unit, then you can split the damage between them.<br/>
         - You can also turn some of your damage into knockback. <br/>
         - Knockback hp = Remaining Hp / 2. <br/>
         - If the knockback Hp = 0, then the unit is pushed 5 mm DIRECTLY AWAY from the attacking unit, and knockback Hp resets.<br/>
      </p>
      <hr className="smol"/>
      <h2><i>Economy - Economics</i></h2>
      <p>
         - Economy is a point-based value that ranges from 1-1000, 1 being nonexistent, 1000 being yay. <br/>
         - Buying war equipment grants you 5% of the cost in economy points. <br/>
         - Losing a unit causes the economy to go down by 5%. <br/>
         - Losing a money maker will cause the economy to go down by (the amount of money produced each turn) / 2.<br/>
         - Everyone starts out with a decent but not amazing economy (500).<br/>
         - If your economy is below 250, then you will have to pay $100 extra for your civilians because they are angy.<br/>
         - If your economy is above 750, then you pay $100 less because civilians like you.<br/>
      </p>
      <hr className="big"/>
      <h1>Specific Mechanics</h1>
      <h2>Stealth - </h2>
      <p>
        The unit is invisible, but every turn there is a 10% chance that the opponent will see it (for one turn only). 
        The opponent CAN attack random spots in hopes of destroying the stealth unit.
      </p>
      <hr/>
      <h2>Military bases - </h2>
        <p>
           - 2 Units&#39; healths increased to 150% in 5 turns<br/>
        </p>
        <hr className="smol"/>
      <h2>Missile Interceptors - </h2>
      <p>
         - 75% chance to intercept and disable incoming missle<br/>
      </p>
      <hr className="smol"/>
      <h2>Radiation - Debuff</h2>
      <p>
         - Nukes will emit radiation similar to radiation of a meltdown, but it only takes 5 turns to clear<br/>
         - Nuclear Reactors - each turn, there is a 5% chance of a meltdown<br/> 
         - If you do get one, all units 2 cm away will be killed, <br/>
         - and all units less and 5 cm away will lose half of their remaining health each turn that they are there<br/> 
         - Building or sending any units there will be useless<br/> 
         - Radiation will take 20 turns to return to safe levels.<br/>
      </p>
      <hr className="smol"/>
      <h2>Artillery - </h2>
      <p>
         - Artillery deals damage every turn, not just yours, and has a 50% chance of doing so.
         - It only costs the usage cost for all the turns after yours.
      </p>
      <hr className="smol"/>
      <h2>Trench charge - </h2>
      <p>
         - All debuffs on the enemy and you from your trench are eliminated, but the ones you get from the enemy trench are still there. 
         - Infantry & tanks only.
      </p>
      <hr className="smol"/>
      <h2>Nuclear engines - </h2>
      <p>
         - If you equip it with something that makes it useless, then it will go slower and cost MORE fuel, not less.
      </p>
      <hr className="big"/>
      <h2 className="">Stats</h2>
      <ul className="list-disc list-inside">
        <li>Money</li>
        <li>Economy</li>
        <li>Civilians - Popularity(Cv-Po)</li>
        <li>Civilians - Education(Cv-Ed)</li>
        <li>Civilians - Qol(Cv-Qol)</li>
        <li>Units - Strength(U-Str)</li>
        <li>Units - Morale(U-Mor)</li>
        <li>Units - Supplies(U-Sup)</li>
        <li>Cities - FortificationClass(Ct-FC)</li>
        <li>Cities - WallHealth(Ct-WH)</li>
        <li>Cities - Population(Ct-Pop)</li>
      </ul>
    </div>
  );
}