import React from 'react';
import PropTypes from 'prop-types';

const formatDollar = (price) => {
  const strPrice = Math.abs(price).toString();
  const negativeSign = price < 0 ? '-' : '';
  const remainder = (strPrice.length > 3) ? strPrice.length % 3 : 0;

  return `${negativeSign}$${(remainder ? `${strPrice.substr(0, remainder)},` : '')}${strPrice.substr(remainder).replace(/(\d{3})(?=\d)/g, '$1,')}`;
};

const formatNumber = (price) => {
  const strPrice = Math.abs(price).toString();
  const negativeSign = price < 0 ? '-' : '';
  const remainder = (strPrice.length > 3) ? strPrice.length % 3 : 0;

  return `${negativeSign}${(remainder ? `${strPrice.substr(0, remainder)},` : '')}${strPrice.substr(remainder).replace(/(\d{3})(?=\d)/g, '$1,')}`;
};

class Affordability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      downPayment: 0,
      downPaymentRate: 20,
      interestRate: 4.17,
      // [0] 30-year fixed, [1] 20-year fixed, [2] 15-year fixed, [3] 10-year fixed,
      // [4] FHA 30-year fixed, [5] FHA 15-year fixed, [6] VA 30-year fixed, [7] VA 15-year fixed
      loanType: 0,
      monthlyLoanPay: 0,
      propertyTaxRate: 1,
      propertyTaxAmount: 0,
      homeInsurance: 75,
      monthlyPayment: 0,
      HOA: 0,
      mortgageInsOther: 0,
    };
    this.loanYear = {
      0: [30, '30-year fixed'],
      1: [20, '20-year fixed'],
      2: [15, '15-year fixed'],
      3: [10, '10-year fixed'],
      4: [30, 'FHA 30-year fixed'],
      5: [15, 'FHA 15-year fixed'],
      6: [30, 'VA 30-year fixed'],
      7: [15, 'VA 15-year fixed'],
    };
    this.calculateLoanAmount = this.calculateLoanAmount.bind(this);
    this.handlePriceOnChange = this.handlePriceOnChange.bind(this);
    this.handleDownPaymentOnChange = this.handleDownPaymentOnChange.bind(this);
    this.handleDownPaymentRateOnChange = this.handleDownPaymentRateOnChange.bind(this);
    this.handleInterestRateOnChange = this.handleInterestRateOnChange.bind(this);
    this.handleLoanTypeChange = this.handleLoanTypeChange.bind(this);
  }

  componentDidMount() {
    const { totalPrice } = this.props;
    this.calculateLoanAmount(totalPrice);
  }

  getChartDegrees() {
    const {
      monthlyLoanPay,
      propertyTaxAmount,
      homeInsurance,
      HOA,
      mortgageInsOther,
    } = this.state;
    const totalDegree = 358;
    const whiteSpacePx = 0.5;
    const totalAmount = monthlyLoanPay + propertyTaxAmount + homeInsurance + HOA + mortgageInsOther;
    const deg1 = monthlyLoanPay / totalAmount * totalDegree;
    const deg2 = deg1 + propertyTaxAmount / totalAmount * totalDegree + whiteSpacePx;
    const deg3 = deg2 + homeInsurance / totalAmount * totalDegree + whiteSpacePx;
    const deg4 = deg3 + HOA / totalAmount * totalDegree + whiteSpacePx;
    const deg5 = deg4 + mortgageInsOther / totalAmount * totalDegree + whiteSpacePx;

    return {
      '--val1': deg1,
      '--val2': deg2,
      '--val3': deg3,
      '--val4': deg4,
      '--val5': deg5,
    };
  }

  calculateLoanAmount(price = -1) {
    let { totalPrice } = this.state;
    const {
      downPaymentRate,
      interestRate,
      loanType,
      propertyTaxRate,
      homeInsurance,
    } = this.state;
    if (price !== -1) totalPrice = price;
    const downPayment = Math.round(totalPrice * (downPaymentRate / 100));
    const propertyTaxAmount = Math.round(totalPrice * propertyTaxRate / 1200);
    if (interestRate === 0) {
      this.setState({
        totalPrice,
        downPayment,
        monthlyLoanPay: 0,
        monthlyPayment: propertyTaxAmount + homeInsurance,
      });
      return;
    }
    const IP = interestRate / 100 / 12;
    const loanYear = this.loanYear[loanType][0];
    const principal = totalPrice - downPayment;
    const monthlyLoanPay = Math.round((principal * IP) / (1 - ((1 + IP) ** (loanYear * 12 * -1))));
    const monthlyPayment = Math.round(monthlyLoanPay + propertyTaxAmount + homeInsurance);
    this.setState({
      totalPrice,
      downPayment,
      monthlyLoanPay,
      propertyTaxAmount,
      monthlyPayment,
    });
  }

  handlePriceOnChange(event) {
    let totalPrice = parseInt(event.target.value.replace(/,/g, ''), 10);
    if (!totalPrice) totalPrice = 0;
    this.setState({ totalPrice }, this.calculateLoanAmount);
  }

  handleDownPaymentOnChange(event) {
    const { totalPrice } = this.state;
    let downPayment = parseInt(event.target.value.replace(/,/g, ''), 10);
    if (!downPayment) downPayment = 0;
    this.setState({
      downPayment,
      downPaymentRate: Math.round(downPayment / totalPrice * 100),
    }, this.calculateLoanAmount);
  }

  handleDownPaymentRateOnChange(event) {
    const { totalPrice } = this.state;
    let downPaymentRate = parseInt(event.target.value, 10);
    if (!downPaymentRate) downPaymentRate = 0;
    this.setState({
      downPayment: Math.round(totalPrice * downPaymentRate / 100),
      downPaymentRate,
    }, this.calculateLoanAmount);
  }

  handleInterestRateOnChange(event) {
    let interestRate = event.target.value;
    if (!interestRate) interestRate = 0;
    this.setState({ interestRate }, this.calculateLoanAmount);
  }

  handleLoanTypeChange(event) {
    this.setState({ loanType: event.target.value }, this.calculateLoanAmount);
  }

  render() {
    const {
      totalPrice,
      downPayment,
      downPaymentRate,
      interestRate,
      loanType,
      monthlyLoanPay,
      propertyTaxAmount,
      homeInsurance,
      monthlyPayment,
      HOA,
      mortgageInsOther,
    } = this.state;
    return (
      <div className="affordabilitySection">
        <div className="h3 ptm pbs">
          <div className="featureTitle h3">
            Affordability
          </div>
        </div>
        <div>
          <div className="affordabilityContents">
            <div className="typeWeightNormal h5">Calculate your monthly mortgage payments</div>
            <div>
              Your est. payment:&nbsp;
              {formatDollar(monthlyPayment)}
              /mo
            </div>
            <div className="pvl affordabilityBox">
              <div className="affordabilityBoxBody">
                <div className="detailContentFlex">
                  <div className="affordabilityColumn">
                    <div className="mts mbs">Home Price</div>
                    <div className="mts mbs">
                      <div className={totalPrice >= 5000 ? "affordabilityInputDiv" : "affordabilityInputDivRed"}>
                        <div className="aff_input aff_minWidth35">$</div>
                        <input type="text" step="5000" className="aff_input aff_widthRest35 aff_textInput" value={formatNumber(totalPrice)} pattern="\d*" onChange={this.handlePriceOnChange} />
                      </div>
                    </div>
                    <div className="aff_input_warn" style={totalPrice >= 5000 ? { display: 'none' } : {}}>Please enter a valid home price</div>
                  </div>
                  <div className="AffordabilityColumn">
                    <div className="mts mbs">Down Payment</div>
                    <div className="mts mbs">
                      <div className="affordabilityInputDiv">
                        <div className="aff_input aff_minWidth33 prn">$</div>
                        <input type="text" step="5000" className="aff_input aff_widthRest120 aff_textInput phs" value={formatNumber(downPayment)} pattern="\d*" onChange={this.handleDownPaymentOnChange} />
                        <input type="text" step="5000" className="aff_input aff_minWidth52 aff_textInput aff_leftInputBorder phs" value={downPaymentRate} pattern="\d*" onChange={this.handleDownPaymentRateOnChange} />
                        <div className="aff_input aff_minWidth35 pln aff_textAlignRight">%</div>
                      </div>
                    </div>
                  </div>
                  <div className="AffordabilityColumn">
                    <div className="mts mbs">Interest Rate</div>
                    <div className="mts mbs">
                      <div className="affordabilityInputDiv">
                        <input type="text" step="5000" className="aff_input aff_widthRest35 aff_textInput prn" value={interestRate} pattern="\d*" onChange={this.handleInterestRateOnChange} />
                        <div className="aff_input aff_minWidth35 pln aff_textAlignRight">%</div>
                      </div>
                    </div>
                  </div>
                  <div className="AffordabilityColumn">
                    <div className="mts mbs">Loan Type</div>
                    <div className="mts mbs">
                      <div className="affordabilityInputDiv">
                        <select ref={(select) => { this.affSelect = select; }} className="aff_input aff_select" onChange={this.handleLoanTypeChange}>
                          {Object.keys(this.loanYear).map(key => (
                            <option key={key} value={key}>
                              {this.loanYear[key][1]}
                            </option>
                          ))}
                        </select>
                        <div className="aff_selectText">{this.loanYear[loanType][1]}</div>
                        <div className="aff_selectArrow">&#59445;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="affordabilityGraph">
              <div className="affordabilityGraphLeft prm">
                <div className="affordabilityGraphDonut">
                  <div className="affordabilityChartText">
                    <div className="affordabilityChartTextUpper">{`${formatDollar(monthlyPayment)}`}</div>
                    <div className="affordabilityChartTextLower pts">/month</div>
                  </div>
                  <div className="affordabilityChart" style={this.getChartDegrees()} />
                </div>
                <div className="affordabilityGraphTypes">
                  <div className="affordabilityGraphType">
                    <div className="affordabilityGraphTypeLeft">
                      <span style={{ backgroundColor: 'rgb(50, 168, 234)' }} />
                      Principal & interest
                    </div>
                    <div className="affordabilityGraphTypeRight">{`(${formatDollar(monthlyLoanPay)})`}</div>
                  </div>
                  <div className="affordabilityGraphType">
                    <div className="affordabilityGraphTypeLeft">
                      <span style={{ backgroundColor: 'rgb(138, 206, 243)' }} />
                      Property taxes
                    </div>
                    <div className="affordabilityGraphTypeRight">{`(${formatDollar(propertyTaxAmount)})`}</div>
                  </div>
                  <div className="affordabilityGraphType">
                    <div className="affordabilityGraphTypeLeft">
                      <span style={{ backgroundColor: 'rgb(251, 177, 0)' }} />
                      Home insurance
                    </div>
                    <div className="affordabilityGraphTypeRight">{`(${formatDollar(homeInsurance)})`}</div>
                  </div>
                  <div className="affordabilityGraphType">
                    <div className="affordabilityGraphTypeLeft">
                      <span style={{ backgroundColor: 'rgb(255, 120, 87)' }} />
                      HOA
                    </div>
                    <div className="affordabilityGraphTypeRight">{`(${formatDollar(HOA)})`}</div>
                  </div>
                  <div className="affordabilityGraphType">
                    <div className="affordabilityGraphTypeLeft">
                      <span style={{ backgroundColor: 'rgb(253, 209, 103)' }} />
                      Mortgage Ins. & other
                    </div>
                    <div className="affordabilityGraphTypeRight">{`(${formatDollar(mortgageInsOther)})`}</div>
                  </div>
                </div>
                <div className="affordabilityGraphBar" />
              </div>
              <div className="affordabilityGraphRight">
                <div className="affordabilityNextSteps">
                  <div className="typeEmphasize mtl h5">Next Steps:</div>
                  <div className="typeWeightNormal mtm h6">See if you quality for this home</div>
                  <a className="affordabilityNextStepsButton mtm" href="https://www.trulia.com/mortgages/pre-qualified/?omni_src=dbtw:mortgage%20long%20form#/first-time">Get Pre-Qualified</a>
                  <div className="typeLowLight mts mbs">or</div>
                  <a className="affordabilityNextStepsMortgage mts mbs" href="https://www.trulia.com/mortgage-rates/San_Francisco,CA/?omni_src=mortgage%7Cpdp_epc&property_value=%248%2C455%2C000&value=8455000&zip=94123&down_payment=1%2C691%2C000&down=1691000&loan_amount=%246%2C764%2C000&cta=rates&auto=true#request=">See today&#39;s mortgage rates</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Affordability.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default Affordability;
