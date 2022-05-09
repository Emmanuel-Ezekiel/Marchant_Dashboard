import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <table className="widgetLgTable">
       
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Item Type</th>
          <th className="widgetLgTh">Price</th>
          <th className="widgetLgTh">Tranction No</th>
          <th className="widgetLgTh">Time</th>
        </tr>
        
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Apple Mac Book 15” 250 SSD 12GB</span>
          </td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgDate">1234567890</td>
          <td className="widgetLgStatus">
            12:30
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Apple Mac Book 15” 250 SSD 12GB</span>
          </td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgDate">1234567890</td>
          <td className="widgetLgStatus">
            12:30
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Apple Mac Book 15” 250 SSD 12GB</span>
          </td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgDate">1234567890</td>
          <td className="widgetLgStatus">
            12:30
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Apple Mac Book 15” 250 SSD 12GB</span>
          </td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgDate">1234567890</td>
          <td className="widgetLgStatus">
            12:30
          </td>
        </tr>
      </table>
    </div>
  );
}
