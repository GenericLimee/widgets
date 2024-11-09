export default function Desc() {
  return (
    <div className="m-8 items-start justify-center flex flex-col">
      <h2 className="ml-8 mb-2 text-xl"><b>Purpose</b></h2>
      <p className="ml-12 text-xl">
        The purpose of this website is to attempt to bring satisfaction to the viewer. <br/>
        As to why I am interested in this, I like asmr in general, so I decided to make my own.
      </p>
      <ul className="m-8">
        <li><b>Ball</b></li>
        <li> - Slide the slider to the right for more ball, and to the left for less.</li>
        <li> - Ball quantity cap at 100</li>
        <li> - Apparently they prefer to not be near your cursor</li>
      </ul>
      <ul className="m-8">
        <li><b>Spin</b></li>
        <li> - Just a bunch of spinning lines.</li>
      </ul>
      <table cellSpacing={100} className="ml-8 mt-4 flex flex-col">
        <tbody>
          <tr>
            <th className="text-2xl">Ratings</th>
            <th>Spin</th>
            <th>Ball</th>
          </tr>
          <tr>
            <th>Lag Rating (more = good)</th>
            <td>•••</td>
            <td>•</td>
          </tr>
          <tr> 
            <th>Satisfaction (more = good)</th>
            <td>••</td>
            <td>•••</td>
          </tr>
          <tr>
            <th>Chaos Rating (more = idk)</th>
            <td>•</td>
            <td>••••</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}