export default function Desc() {
  return (
    <div className="m-8 items-start justify-center flex flex-col">
      <ul className="m-8">
        <li><b>Ball</b></li>
        <li> - Slide the slider to the right for more balls, and to the left for less.</li>
        <li> - Balls cap at 500</li>
        <li> - Apparently they prefer to not be near your cursor</li>
      </ul>
      <ul className="m-8">
        <li><b>Spin</b></li>
        <li> - Just a bunch of spinning lines.</li>
      </ul>
      <table cellSpacing={100} className="ml-8 mt-4 flex flex-col">
        <tbody>
          <tr>
            <th className="text-3xl">Ratings</th>
            <th>Spin</th>
            <th>Ball</th>
          </tr>
          <tr>
            <th>Lag (more = good)</th>
            <td>•••</td>
            <td>•</td>
          </tr>
          <tr> 
            <th>Satisfaction (more = good)</th>
            <td>••</td>
            <td>•••</td>
          </tr>
          <tr>
            <th>Chaos (more = idk)</th>
            <td>•</td>
            <td>••••</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}