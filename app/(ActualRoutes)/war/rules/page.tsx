export default function Page() {
  return (
    <div className="py-10 px-96 font-extralight font-ad">
      <div className="text-5xl text-red-600 font-bold">--IN-DEVELOPMENT--</div><br/><br/>
      <h1>General</h1>
      <p>
        DURING YOUR TURN, AFTER 15 SECONDS MAX, IF YOU DON'T DO ANYTHING, YOU WILL BE SKIPPED <br/>
        (womp womp) This game is designed to be played with 5+ people<br/>
      </p>
      <br/>
      <h2>Politics - Ways of rule<br/></h2>
      <ol className="list-[upper-roman]">
        <li>
          Communism: you don't have to pay your civilians, but you only get 50% of the money
        </li>
        <li>
          Democracy: normal things, start with more educated people
        </li>
        <li>
          Fascism : all of the stuff will cost only 50%, but you have to pay your civilians 1.5 times as much and in ⅔ of the time<br/>
        </li>
      </ol>
      <br/>
      <h2>Movement cost - $75 / unit / cm<br/></h2>
      <p>
        Units moved greater than 30 cm will experience significant morale loss.
      </p>
      <br/>
      <h2>Usage cost - $100 / unit / use<br/></h2>
      <p>
        You may also blitz, where you can use units multiple times in one turn, <br/>
        but it will cost $(100 * uses^3).
      </p>
      <br/>
      <h2>Encirclement - Debuff (Passive)</h2>
      <p>
        Your opponent's damage is halved, while yours is doubled, until encirclement is broken<br/> (morale)
      </p>
      <br/>
      <h2>Cities - You can found a city for $1000<br/></h2>
      <p>
        A military base is 10 medical tents, a military base and an airfield, but is still considered a city.<br/> 
        It itself can hold 15 units, not counting the base, the tents, and the airfield, thus making up its garrison. <br/> 
        In order to take an opponent's city, you need conduct a siege<br/> 
        All cities start at a fortification class of I, and upgrading it costs $500<br/> 
      </p>
      <br/>
      <h2>Siege - Seiging</h2>
      <p>
        The Fortification Class of cities determines how long it will take for an army to peirce its defences.<br/> 
        Time = (FortClass * (garrisonMass + 2)) / OpponentStrength :
        To increase a citiy's fortification class, it would take 5 turns and 5^previousFC
      </p>
      <br/>
      <h2>Civilians - Mechanic</h2>
      <p>
        Every 3 turns except the first 6, you must pay $100 * (class) to your civilians altogether<br/>
        If you don't, after the next three turns you will have to play 2.5 times that<br/> 
        If you still don't, then there will be a rebellion that I will control<br/> 
        Your money produced will be halved<br/><br/>
        Civilians can also contribute to discoveries<br/>
        If you have a population of 10K, qol 0.5, you would have a 1% chance discovery every round<br/>
        CHANCE OF DISCOVERY PER TURN = (0.01 * POPULATION ^ QOL FACTOR)% 
        Note: qolFactor = quality of life factor and ranges from 0-1<br/> 
        So basically, you can either have a well educated and happy population for good stuff, <br/>
        or a sad and stupid population for money<br/> (Education also slightly boosts army strength)
      </p>
      <br/>
      <br/>
      <h1>Specific Mechanics</h1>
      <br/>
      <h2>Military bases - 2 Units Healed to full / 3 turns<br/></h2>
      <br/>
      <h2>Missile Interceptors - 75% chance to intercept and disable incoming missle<br/></h2>
      <br/>
      <h2>Radiation - Debuff</h2>
      <p>
        Nukes will emit radiation similar to radiation of a meltdown, but it only takes 5 turns to clear<br/>
        Nuclear Reactors - each turn, there is a 5% chance of a meltdown<br/> 
        If you do get one, all units 2 cm away will be killed, <br/>
        and all units less and 5 cm away will lose half of their remaining health each turn that they are there<br/> 
        Building or sending any units there will be useless<br/> 
        Radiation will take 20 turns to return to safe levels.<br/>
      </p>
      <br/>
      <br/>
      <h1>Stats</h1>
      <ul className="list-disc">
        <li>Money</li>
        <li>Civilians - Popularity(Cv-Po)</li>
        <li>Civilians - Education(Cv-Ed)</li>
        <li>Civilians - Qol(Cv-Qol)</li>
        <li>Units - Strength(U-Str)</li>
        <li>Units - Morale(U-Mo)</li>
        <li>Units - Supplies(U-Su)</li>
        <li>Cities - FortificationClass(Ct-FC)</li>
        <li>Cities - WallHealth(Ct-WH)</li>
        <li>Cities - GarrisonStrength(Ct-GS)</li>
      </ul>
      <h1><i>EXPERIMENTAL: Economy - </i></h1>
      <p>
        Everyone starts out with a decent but not amazing economy (200)<br/> 
        Economy is a point-based value that ranges from 1-1000, 1 being nonexistent, 1000 being yay<br/> 
        Buying war equipment grants you 5% of the cost in economy points<br/>
      </p>
    </div>
  );
}