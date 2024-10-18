export default function Desc() {
  return (
    <div className="m-8 items-start justify-center flex flex-col">
      <ul className="m-8">
        <li><b>Ball</b></li>
        <li>Slide the slider to the right for more balls, and to the left for less.</li>
        <li>Balls cap at 150</li>
      </ul>
      <ul className="m-8">
        <li><b>Spin</b></li>
        <li>Just a bunch of spinning lines.</li>
      </ul>
      <table cellSpacing={100} className="ml-8 flex flex-col">
        <caption className="self-start"><b>Table of widgets</b></caption>
        <tbody>
          <tr>
            <td></td>
            <th>Spin</th>
            <th>Ball</th>
          </tr>
          <tr>
            <th>Lag</th>
            <td>•</td>
            <td>•••</td>
          </tr>
          <tr> 
            <th>Satisfaction</th>
            <td>•</td>
            <td>••</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}