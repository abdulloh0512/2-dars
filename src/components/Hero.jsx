import Input from "@mui/joy/Input";
import styled from "styled-components";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Autocomplete from "@mui/joy/Autocomplete";
import Option from "./Option";
import TextArea from "./TextArea";

const Hero = () => {
  const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>
      `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
        index % 2 === 0 ? "00" : "30"
      }`
  );
  const BUTTON = styled.button`
    padding: 12px 18px 12px 18px;
    gap: 8px;
    opacity: 0px;
    background: #0062ff;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 15px;
  `;
  const SPAN1 = styled.span`
    display: flex;
    gap: 15px;
    width: 400px;
    align-items: center;
  `;

  const DIV1 = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  `;

  const DIV2 = styled.div`
    width: 1400px;
    margin: 0 auto;
    border: 1px solid gray;
    padding: 20px;
    border-bottom: none;
    border-radius: 10px;
    margin-top: 50px;
  `;
  const DIV3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    line-height: 30px;
  `;
  const DIV4 = styled.div`
    width: 50%;
  `;
  const DIV5 = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    margin-bottom: 20px;
  `;
  const H1 = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0.10000000149011612px;
    color: #171725;
    margin-top: 20px;
  `;
  const DIV6 = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-around;
  `;
  const IMG = styled.img`
    position: absolute;
top: -400px;
left: 800px;
  `;
  const DIV8 = styled.div`
    position: relative;
  `;
  return (
    <>
      <DIV2>
        <DIV1>
          <SPAN1>
            <img src="./leftarrow.svg" alt="" />
            <h1>Subloyiha ochish</h1>
          </SPAN1>
          <BUTTON color="primary" size="lg" variant="solid">
            Davom etish <img src="./arrow-right.svg" alt="" />
          </BUTTON>
        </DIV1>
        <hr />
        <DIV3>
          <DIV4>
            <p>Loyiha nomi </p>
            <Input placeholder="Type in here…" />
          </DIV4>
          <DIV4>
            <p>Tag</p>
            <Input placeholder="Type in here…" />
          </DIV4>
        </DIV3>
        <DIV3>
          <DIV4>
            <FormControl id="disabled-options-demo">
              <FormLabel>
                <img src="./check.png" alt="" />
                Boshlanish vaqti
              </FormLabel>
              <Autocomplete
                options={timeSlots}
                placeholder="Boshlanish vaqti"
                getOptionDisabled={(option) =>
                  option === timeSlots[0] || option === timeSlots[2]
                }
              />
            </FormControl>
          </DIV4>
          <DIV4>
            <FormControl id="disabled-options-demo">
              <FormLabel>
                <img src="./check.png" alt="" />
                Qancha vaqtda habar yuboriladi?
              </FormLabel>
              <Autocomplete
                options={timeSlots}
                placeholder="O'sha zahoti"
                getOptionDisabled={(option) =>
                  option === timeSlots[0] || option === timeSlots[2]
                }
              />
            </FormControl>
          </DIV4>
        </DIV3>
        <div>
          <DIV5>
            <img src="./check.png" alt="" />
            <p>Habar yuborilmaydigan vaqt</p>
          </DIV5>
          <img src="./timeline.png" alt="" />
        </div>
        <div>
          <div>
            <H1>Habarning ko’rinishi</H1>
            <DIV4>
              <Option />
            </DIV4>
            <DIV4>
              <FormControl>
                <FormLabel>Link</FormLabel>
                <Input placeholder="Link" />
              </FormControl>
            </DIV4>
            <DIV6>
              <TextArea />
              <TextArea />
              <TextArea />
            </DIV6>
          </div>
          <DIV8>
            <IMG src="./phone.png" alt="" />
          </DIV8>
        </div>
      </DIV2>
    </>
  );
};

export default Hero;
