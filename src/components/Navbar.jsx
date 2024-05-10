import styled from "styled-components";

const Navbar = () => {
  const H3 = styled.h3`
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #92929d;
    cursor: pointer;
  `;
  const IMG1 = styled.img`
    width: 16px;
    height: 16px;
    cursor: pointer;
  `;
  const SPAN1 = styled.span`
    display: flex;
    align-items: center;
    gap: 7px;
  `;
  const DIV1 = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
  `;
  const H1 = styled.h1`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    cursor: pointer;
  `;
  const DIV2 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0 20px;
  `;
  const DIV3 = styled.div`
    width: 122  0px;
    margin: 0 auto;
  `;
  return (
    <>
      <DIV3>
        <DIV2>
          <img src="./Logo.svg" alt="" />
          <DIV1>
            <SPAN1>
              <IMG1 src="./dashboard.svg" alt="" /> <H3>Asosiy</H3>
            </SPAN1>
            <SPAN1>
              <IMG1 src="./dashava.svg" alt="" /> <H3>Mijozlar bazasi</H3>
            </SPAN1>
            <SPAN1>
              <IMG1 src="./tracking.svg" alt="" /> <H3>Tracking loyihalari</H3>
            </SPAN1>
            <SPAN1>
              <IMG1 src="./schedule.svg" alt="" />{" "}
              <H3>Sharh olish loyihalari</H3>
            </SPAN1>
            <SPAN1>
              <IMG1 src="./upload.svg" alt="" /> <H3>Redirect loyihalari</H3>
            </SPAN1>
          </DIV1>
          <SPAN1>
            <img src="./Profile.png" alt="" />
            <H1>Austin Robertson</H1>
            <img src="./dropdown.svg" alt="" />
          </SPAN1>
        </DIV2>
      </DIV3>
      <hr />
    </>
  );
};

export default Navbar;
