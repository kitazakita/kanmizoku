const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="inner-container">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="corporate-table">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>甘味族</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TEL</td>
                  <td>000-0000-0000</td>
                </tr>
                <tr>
                  <td>住所</td>
                  <td>〇〇県〇市〇町１１番地</td>
                </tr>
                <tr>
                  <td>営業時間</td>
                  <td>10:00~17:00</td>
                </tr>
                <tr>
                  <td>定休日</td>
                  <td>水曜日</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
