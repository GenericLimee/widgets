export default function Page() {
  return (
    <div className="py-10 px-96">
      <div className="text-5xl text-red-600 font-bold">--IN-DEVELOPMENT--</div><br/><br/>
      <h1>General</h1>
      <p>
        DURING YOUR TURN, AFTER 15 SECONDS MAX, IF YOU DON'T DO ANYTHING, YOU WILL BE SKIPPED (womp womp)
        This game is designed to be played with 5+ people<br/>
      </p>
      <br/>
      <h2>Politics - You can choose 1 way of ruling your country<br/></h2>
      <ul>
        <li>
          Communism: you don't have to pay your civilians, but you only get 50% of the money
        </li>
        <li>
          Democracy: normal things, start with more educated people
        </li>
        <li>
          Fascism : all of the stuff will cost only 50%, <br/>
          but you have to pay your civilians 1.5 times as much and in ⅔ of the time<br/>
        </li>
        <li>(so it's a gamble)</li>
      </ul>
      <br/>
      <h2>Movement cost -  every turn, moving one unit costs $75<br/></h2>
      <br/>
      <h2>Usage cost - every turn, the cost of using one unit costs $100<br/></h2>
      <br/>
      <h2>Encirclement - Debuff (Passive)</h2>
      <p>
        Your opponent's damage is halved, while yours is doubled, until encirclement is broken<br/> (morale)
      </p>
      <br/>
      <h2>Cities - You can create a city for $1000<br/></h2>
      <p>
        This city is basically 10 medical tents + a military base + airfield<br/> 
        It itself can hold 15 units, not counting the base, the tents, and the airfield<br/> 
        Also, in order to take it, you need a siege<br/> 
        All cities start at a fortification class of I, and upgrading it costs $500<br/> 
      </p>
      <br/>
      <h2>Siege - Seiging</h2>
      <p>
        The Fortification Class of cities determines how long it will take for an army to peirce it<br/> 
        Equation = (Fort<br/> class * (garrison quantity + 1)) * 2 / number of attacking units :
        To increase a citiy's fortification class, it would take 5 turns and ___
      </p>
      <br/>
      <h2>Civilians - Mechanic</h2>
      <p>
        Every 3 turns (except 6 for the first time), you must pay $100 * (class) to your civilians<br/>
        If you don't, after the next three turns you will have to play 2<br/>5 times that<br/> 
        If you still don't, then there will be a rebellion that I will control<br/> Your money produced will be halved<br/>
        Civilians can also contribute to discoveries<br/>
        If you have a population of 10K, qol 0<br/>5, you would have a 1% chance discovery every round<br/>
        CHANCE OF DISCOVERY PER TURN = (0<br/>01 * POPULATION ^ QOL FACTOR)% 
        Note: qolFactor = quality of life factor and ranges from 0-1<br/> 
        So basically, you can either have a well educated and happy population for good stuff, or a sad and stupid population for money<br/> (Education also slightly boosts army strength)
      </p>
      <br/>
      <br/>
      <h1>Specific Mechanics</h1>
      <br/>
      <h2>Military bases - each of these can heal one unit to full health, but this healing takes 5 turns<br/></h2>
      <br/>
      <h2>Missile Interceptors - Each time used, there is a 75% chance that the incoming missile will be destroyed<br/></h2>
      <br/>
      <h2>Radiation - Debuff</h2>
      <p>
        Nukes will emit radiation similar to radiation of a meltdown, but it only takes 5 turns to clear<br/>
        Nuclear Reactors - each turn, there is a 5% chance of a meltdown<br/> If you do get one, all units 2 cm away will be killed, and all units less and 5 cm away will lose half of their remaining health each turn that they are there<br/> Building or sending any units there will be useless<br/> Radiation will take 20 turns to clear<br/>
      </p>
      <br/>
      <br/>
      <h1><i>EXPERIMENTAL: Economy - </i></h1>
      <p>
        Everyone starts out with a decent but not amazing economy (200)<br/> 
        Economy is a point-based value that ranges from 1-1000, 1 being nonexistent, 1000 being yay<br/> 
        Buying war equipment grants you 5% of the cost in economy points<br/>
      </p>
    </div>
  );
}