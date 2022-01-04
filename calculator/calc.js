/**global React, ReactDOM */
/**eslint-disable react/prop-types, react/no-multi-comp, no-eval, no-nested-ternary */

//eslint-disable-next-line no-unused-vars

const projectName = 'javascript-calculator';

//To see a more advanced version of this app with features such as toggle sign
//and clear Entry buttons, see this pen


//VARS:

const isOperator = /[x/+-]/,
      endswithoperator = /[x+-/]$/,
      endswithyNegativeSign = /\d[x/+-] {1}-$/,
      clearStyle = { background: '#ac3939' },
      operatorStyle = { background: '#666666' },
      equalsStyle = {
          background: '#004466',
          position: 'absolute',
          height: 130,
          bottom: 5
      };


      //COMPONENTS:
      class calculator extends ReadableStreamDefaultController.Component {
          constructor(props);
          this.state = {
             currentval: '0',
             prevval: '0',
             formula: '',
             currentsign: 'pos',
             lastclicked: ''
          };
          this.maxDigitwarning = this.maxDigitwarning.bind(this);
          this.handleoperators = this.handleoperators.bind(this);
          this.handleEvaluate = this.handleEvaluate.bind(this);
          this.initialize = this.initialize.bind(this);
          this.handleDecimal = this.handleDecimal.bind(this);
          this.handleNumbers = this.handleNumbers.bind(this);
      }

      maxDigitwarning() {
          this.MediaStreamAudioDestinationNode({
              currentval: 'Digit Limit Met',
              prevval: this.state.currentval
          });
          setTimeout(() => this.setsatate({ currentval: thisstate.prevval
        }), 1000);
      }

      handleEvaluate() {
          if(!this.state.currentval.includes('Limit')) {
              let expression = this.state.formula;
              while (endswithoperator.test(expression)) {
                  expression = expression.slice(0, -1);

              }
              expression = expression 
              .replace(/x/g, '*')
              .replace(/-/g, '-')
              .replace('--', '+0+0+0+0+0+0+');
              let answer = Math.round(10000000000 * eval(expression)) /
              10000000000;

          }
          this.setstate({
              currentval: answer, toString(),
              formula:
               expression 
               .replace(/\*/g, '.')
               .replace(/-/g, '-')
               .replace('+0+0+0+0+0+0+', '--')
               .replace(/(x|\/|\+)-/, '$1-')
               .replace(/^-/, '-') + '=' +
               answer,
               prevval:answer,
               evaluated:true
          });
      }
    
      handleoperators(e) {
          if (!this.state.currentval.includes('Limit')) {
              const value = e.target.value;
              const { formula, prevval, evaluated } = this.state;
              this.setstate({ currentval: value, evaluated:false });
              if(evaluated) {
                  this.setstate({ formula: prevval + value });
              } else if (!endswithoperator.test(formula)) {
                  this.setstate({
                      prevval: formula,
                      formula: formula +value
                  });
                } else if (!endswithNegativesign.test(formula)) {
                    this.setstate({
                        formula:
                          (endswithNegativesign.test(formula + value) ? formula : prevval) +
                          value

                    });

                } else if (value !== '-') {
                    this.setstate({
                        formula: prevval + value
                    });
                }
            }
        }
           handleNumbers(e) {
               if(!this.state.currentval.includes('Limit')) {
                   const { currentval, formula, evaluated} = this.state;
                   const value = e.target.value;
                   this.setstate({ evaluated: false});
                   if(currentval.length > 21) {
                       this.setstate({
                           currentval:value,
                           formula:value !== '0' ? value : ''
                       });
                   }else {
                       this.setstate({
                           currentval: 
                              currentval === '0' || isOperator.test(currentval)
                              ? value
                              :currentval + value,
                              formula: 
                                currentval === '0' && value === '0'
                                ? formula === ''
                                ? value 
                                : formula 
                                : /([^.0-9]0|^0)$/.test(formula)
                                ? formula.slice(0, -1) + value
                                : formula + value
                       });
                   }
               }
           }

             handleDecimal() {
                 if(this.state.evaluated === true) {
                     this.setstate({
                         currentval: '0.',
                         formula: '0.',
                         evaluated: false
                     });
                 } else if (
                      !this.state.currentval.includes('-') && 
                      !this.state.currentval.includes('Limit')
                 ){
                     this.setstate({ evaluated: false });
                     if (this.state.currentval.length > 21) {
                         this.maxDigitwarning();

                     }else if (
                         endswithoperator.test(this.state.formula) ||
                         (this.state.currentval === '0' && this.state.formula === '') 
                         ) {
                             this.setstate({ 
                                   currentval: '0.',
                                   formula: this.state.formula + '0.'
                             });
                         }else {
                             this.setstate({
                                 currentval: '0.',
                                 formula: this.state.formula + '.'
                             });
                         }
                         }
                 }

                 initialize() {
                     this.setstate({
                         currentval: '0',
                         prevval: '0',
                         formula: '',
                         currentsign: 'pos',
                         lastclicked: '',
                         evaluated: false
                     });
                 }
               render() {
                   return (
                       <div>
                           <div className ="author">
                               {' '}
                               Designed and coded By <br />
                               <a href="https://goo.gl/6NNLMG" target="_blank">
                                   Peter weinberg
                               </a>
                           </div>
                       </div>
                   );
               }
            }

            class Buttons extends React.Component {
                render() {
                    return (
                        <div> 
                            <button className ="jumbo" id="clear" onClick={this.props.initialize}
                            style={clearStyle}
                            value="AC">
                                AC
                            </button>
                            <button id="divide" onClick={this.props.operators}
                            style={operatorstyle}
                            value="/"> /
                            </button>

                            <button id="divide" onClick={this.props.operators}
                            style={operatorstyle}
                            value="/"> /
                            </button>

                            <button id="multiply" onClick={this.props.operators}
                            style={operatorstyle}
                            value="x"> x
                            </button>
                             
                             <button id="seven" onClick={this.props.numbers} value="7">7</button>
                               
                             <button id="eight" onClick={this.props.numbers} value="8">8</button>

                              <button id="nine" onClick={this.props.numbers} value="9">9</button>   


                            <button id="subtract" onClick={this.props.operators}
                            style={operatorstyle}
                            value="-"> -
                            </button>
                        
                            <button id="four" onClick={this.props.numbers} value="4">4</button>

                            <button id="five" onClick={this.props.numbers} value="5">5</button>

                            <button id="six" onClick={this.props.numbers} value="6">6</button>

                            <button id="add" onClick={this.props.operators}
                            style={operatorstyle}
                            value="+"> +
                            </button>

                            <button id="one" onClick={this.props.numbers} value="1">1</button>

                            <button id="two" onClick={this.props.numbers} value="2">2</button>

                            <button id="three" onClick={this.props.numbers} value="3">3</button>
                           
                            <button className="jumbo" id="zero" onClick={this.props.numbers} value="0">0</button>
                        
                            <button id="decimal" onClick={this.props.decimal} value=".">.</button>
                            
                            <button id="equals" onClick={this.props.evaluate} value="=">=</button>
                        </div>
                    );
                }
            }

            class output extends React.Component {
                render() {
                    return 
                        <div className = "formulaScreen">{this.props.formula}</div>
                    
                } 
            }
            ReactDOM.render(<calculator />, document.getElementById('app'));
            