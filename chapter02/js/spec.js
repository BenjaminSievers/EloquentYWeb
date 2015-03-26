describe("Expressions and Statements exercises", function() {

  describe("Expressions 1", function() {

    it("should return an expression that is not undefined", function() {
      expect( Exer.expressions1() ).not.toBe(undefined);
    });

    it("should return an expression with parentheses in it", function() {
      expect( Exer.expressions1.toString().match(/^\s*return.*;/mg)[0].match(/(?:\(|\)).+(?:\(|\))/g) ).not.toBeNull();
    });

  });

  describe("Statements 1", function() {

    beforeAll(function() {
      this.work = Exer.statements1.toString().match(/^.+?$/mg);  // break into lines
      for ( var i = 0; i < this.work.length; ) {
        if ( this.work[i].match(/^\s*\/\//) ) {
          this.work.splice(i, 1);
        } else { i++; }
      }
      this.work = this.work.slice(1, length - 1);  // remove function expression wrapper
    });

    it("should contain a single statement", function() {
      expect( this.work ).not.toBe(null);           // there should be lines left
      expect( this.work.length ).toBe(1);           // in fact, one line
      this.work = this.work[0].match(/\s*(.*);/g);  // find statements
      expect( this.work ).not.toBe(null);
    });

    it("should evaluate to something other than undefined", function() {
      expect( eval(this.work[0].match(/\s*(.*);/)[1]) ).not.toBeUndefined();
    });

  });
});

describe("Variables exercises", function() {

  describe("Variables 1", function() {
    it("should declare a variable", function() {
      expect( Exer.variables1.toString().match(/^\s*var\s.*;/mg) ).not.toBeNull();
    });
  });

  describe("Variables 2", function() {

    beforeAll(function() {
      this.dec = Exer.variables2.toString().match(/^\s*var\s*(.*)\s*;/m);
      this.vari2 = this.dec[1];
    });

    it("should declare a variable", function() {
      expect( this.dec ).not.toBeNull();
    });

    it("should make an assignment", function() {
      var re = new RegExp('^\\s*' + this.vari2 + '\\s*=.*;', 'm');
      expect( Exer.variables2.toString().match(re) ).not.toBeNull();
    });

    it("should return the variable", function() {
      var re = new RegExp('^\\s*return\\s' + this.vari2 + '\\s*;', 'm');
      expect( Exer.variables2.toString().match(re) ).not.toBeNull();
    });

    it("should return a number", function() {
      expect( typeof Exer.variables2() ).toBe('number');
    });

  });

  describe("Variables 3", function() {

    describe("should contain a statement that", function() {

      it("should declare a variable", function() {
        expect( Exer.variables3.toString().match(/\s*var\s*.*;/m) ).not.toBeNull();
      });

      it("should initialize it to a string", function() {
        expect( Exer.variables3.toString().match(/\s*var\s*.*=.*(?:'|").*(?:'|")\s*;/m) ).not.toBeNull();
      });

      it("should return a string", function() {
        expect( typeof Exer.variables3() ).toBe('string');
      });

    });

  });

  describe("Variables 4", function() {

    it("should return the parameter", function() {
      expect( Exer.variables4(0) ).toBe(0);
    });

    it("should return the parameter", function() {
      expect( Exer.variables4(3) ).toBe(3);
    });

    it("should return the parameter", function() {
      expect( Exer.variables4(false) ).toBe(false);
    });

    it("should return the parameter", function() {
      expect( Exer.variables4("Hello, world!") ).toBe("Hello, world!");
    });

    it("should return the parameter", function() {
      expect( Exer.variables4(undefined) ).toBe(undefined);
    });

  });

  describe("Variables 5", function() {

    it("should return the parameter", function() {
      expect( Exer.variables5(0) ).toBe(0);
    });

    it("should return the parameter", function() {
      expect( Exer.variables5(3) ).toBe(3);
    });

    it("should return the parameter", function() {
      expect( Exer.variables5(false) ).toBe(false);
    });

    it("should return the parameter", function() {
      expect( Exer.variables5("Hello, world!") ).toBe("Hello, world!");
    });

    it("should return the parameter", function() {
      expect( Exer.variables5(undefined) ).toBe(undefined);
    });

    it("should not return the parameter directly", function() {
      expect( Exer.variables5.toString().match(/^\s*return\s*n\s*;/m) ).toBeNull();
    });

  });

  describe("Variables 6", function() {

    it("should return 3 plus Stacy's number", function() {
      expect( Exer.variables6(0) ).toBe(3);
    });

    it("should return 3 plus Stacy's number", function() {
      expect( Exer.variables6(5) ).toBe(8);
    });

    it("should return 3 plus Stacy's number", function() {
      expect( Exer.variables6(Infinity) ).toBe(Infinity);
    });

  });

  describe("Variables 7", function() {

    it("should return a string representing the change left when starting with $1.00", function() {
      expect( Exer.variables7(1) ).toBe('$1.15');
    });

    it("should return a string representing the change left when starting with $3.50", function() {
      expect( Exer.variables7(3.50) ).toBe('$3.65');
    });

    it("should return a string representing the change left when starting with $0.01", function() {
      expect( Exer.variables7(0.01) ).toBe('$0.16');
    });

  });

});

describe("Keywords and Reserved Words exercises", function() {

  describe("Keywords 1", function() {

    beforeAll( function() {
      this.helper = function (tue, two) {
        var newt = 2;
        var aconst = two+2;
        tue += "2";
        var func = newt + aconst + tue + two;
        return func;
      };
    });

    it("should return the string '5121'", function() {
      expect( Exer.keywords1(1,1) ).toBe( this.helper(1,1) );
    });

    it("should return the string '332-1'", function() {
      expect( Exer.keywords1(3,-1) ).toBe( this.helper(3,-1) );
    });

    it("should return the string '9025'", function() {
      expect( Exer.keywords1(0,5) ).toBe( this.helper(0,5) );
    });

  });

});

describe("The environment exercises", function() {
  describe("Evironment 1", function(){
    it("should return the variable that is not an environment variable", function() {
      window.browser = 'browser';
      var result = Exer.environment1();
      expect( result ).toEqual( "browser" );
    });
  });
});

describe("the functions exercises", function() {
  describe("Function 1", function() {

    beforeAll(function(){
      var recombobulate = jasmine.createSpy('recombobulate');
      var setPowerLevel = jasmine.createSpy('setPowerLevel');
      var cornTortilla = jasmine.createSpy('cornTortilla');
      Exer.functions1(recombobulate, setPowerLevel, cornTortilla);
    });

    it("recombobulate should be called with no arguments", function () {
      expect(recombobulate).toHaveBeenCalled();
      expect(recombobulate.calls.count()).toEqual(1);
      expect(recombobulate.calls.argsFor(0).length).toEqual(0);
    });

    it("setPowerLevel should be called with a single argument that is greater than 9000", function () {
      expect(setPowerLevel).toHaveBeenCalled();
      expect(setPowerLevel.calls.count()).toEqual(1);
      expect(setPowerLevel.calls.argsFor(0)[0]).toBeGreaterThan(9000);
    });

    it("cornTortilla should be called with the arguments \"chicken\", \"queso\", \"bacon\", and \"lime\"", function () {
      expect(cornTortilla).toHaveBeenCalled();
      expect(cornTortilla.calls.count()).toEqual(1);
      expect(cornTortilla.calls.argsFor(0)).toEqual(["chicken", "queso", "bacon", "lime"]);
    });
  });
});

// Annalise
describe("The console.log Function exercises", function() {

  describe("Console 1", function() {

    it("should make one call to the console", function() {
      spyOn(console, 'log');
      Exer.console1();
      expect( console.log.calls.count() ).toEqual(1);
    });

    it("should not return anything", function() {
      expect( Exer.console1() ).toBe(undefined);
    });

  });

  describe("Console 2", function() {

    describe("structure", function () {

      beforeEach(function () {
        spyOn(console, 'log');
      });

      it("should make one call to the console", function() {
        Exer.console2();
        expect( console.log.calls.count() ).toEqual(1);
      });

      it("should not return anything", function() {
        expect( Exer.console2() ).toBe(undefined);
      });

    });

    describe("with parameters", function () {

      beforeEach(function() {
        spyOn(console, 'log').and.callThrough();
      });

      it("should print the parameter", function() {
        var test = 3;
        Exer.console2(test);
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print the parameter", function() {
        var test = "Hello, world!";
        Exer.console2(test);
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print the parameter", function() {
        var test = {
          foo: "bar",
          baz: "bat"
        };
        Exer.console2(test);
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

    });

  });

  describe("Console 3", function () {

    describe("structure", function () {

      beforeEach(function() {
        spyOn(console, 'log');
      });

      it("should make one call to the console", function () {
        Exer.console3();
        expect( console.log.calls.count() ).toEqual(1);
      });

      it("should not return anything", function () {
        expect( Exer.console3() ).toBe(undefined);
      });

    });

    describe("with parameters", function() {

      beforeEach(function () {
        spyOn(console, 'log').and.callThrough();
      });

      it("should print 'The magic word is \"Abracadabra!\"'", function () {
        var test = "Abracadabra!";
        Exer.console3(test);
        test = 'The magic word is "' + test + '"';
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print 'The magic word is \"Shazam!\"'", function () {
        var test = "Shazam!";
        Exer.console3(test);
        test = 'The magic word is "' + test + '"';
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print 'The magic word is \"Please\"'", function () {
        var test = "Please";
        Exer.console3(test);
        test = 'The magic word is "' + test + '"';
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

    });

  });

  describe("Console 4", function() {

    it("should make one call to the console", function () {
      spyOn(console, 'log');
      Exer.console4();
      expect( console.log.calls.count() ).toEqual(1);
    });

    it("should provide two parameters", function () {
      spyOn(console, 'log').and.callThrough();
      Exer.console4();
      expect( console.log.calls.allArgs()[0].length ).toEqual(2);
    });

  });

  describe("Console 5", function() {
    it("should make one call to the console", function () {
      spyOn(console, 'log');
      Exer.console5();
      expect( console.log.calls.count() ).toEqual(1);
    });

    describe("outputs", function () {
      beforeAll(function() {
        this.test1 = "secret passphrase";
        this.test2 = -6;
        spyOn(console, 'log').and.callThrough();
      });

      it("should return the second parameter plus 1", function () {
        expect( Exer.console5(this.test1, this.test2) ).toEqual( this.test2+1 );
      });

      it("should print the first parameter", function () {
        expect( console.log.calls.allArgs() ).toEqual([[this.test1]]);
      });

    });

  });

});

describe("Return Values exercises", function () {

  describe("Return 1", function () {

    beforeAll(function () {
      spyOn( window, 'magicFunc' ).and.callThrough();
      spyOn( console, 'log' ).and.callThrough();
      Exer.return1();
    });

    it("should call magicFunc", function () {
      expect( magicFunc ).toHaveBeenCalled();
    });

    it("should call console.log", function () {
      expect( console.log ).toHaveBeenCalled();
    });

    it("should log something that looks like a typical result of magicFunc", function () {
      expect( console.log.calls.argsFor(0).length ).toBeGreaterThan(0);
      expect( console.log.calls.argsFor(0) >= 0 ).toBeTruthy();
      expect( console.log.calls.argsFor(0) < 100 ).toBeTruthy();
    });

  });

  describe("Return 2", function () {

    it("should call magicFunc", function () {
      spyOn( window, 'magicFunc' );
      Exer.return2();
      expect( magicFunc ).toHaveBeenCalled();
    });

    it("should return something that looks like a typical result of magicFunc", function () {
      expect( Exer.return2() >= 0 ).toBeTruthy();
      expect( Exer.return2() < 100 ).toBeTruthy();
    });

  });

  describe("Return 3", function () {

    var foo;

    beforeAll(function () {
      spyOn( window, 'strShift' ).and.callThrough();
      spyOn( console, 'log' ).and.callThrough();
      foo = Exer.return3();
    });

    it("should call strShift", function () {
      expect( strShift ).toHaveBeenCalled();
    });

    it("should call strShift with argument abczABCZ", function () {
      expect( strShift.calls.argsFor(0) ).toEqual(["abczABCZ"]);
    });

    it('should log "bcdaBCDA"', function () {
      expect( console.log.calls.allArgs() ).toEqual([["bcdaBCDA"]]);
    });

    it('should return "bcdaBCDA123"', function () {
      expect( foo ).toEqual( "bcdaBCDA123" );
    });

    it("should call strShift only once", function () {
      expect( strShift.calls.count() ).toEqual(1);
    });

  });

  describe( "Return 4", function () {

    beforeAll( function () {
      spyOn( window, 'magicFunc' ).and.callThrough();
      spyOn( console, 'log' ).and.callThrough();
      Exer.return4();
    } );

    it( "should call magicFunc twice", function () {
      expect( magicFunc.calls.count() ).toEqual(2);
    } );

    it( "should call console.log once", function () {
      expect( console.log.calls.count() ).toEqual(1);
    } );

    it( "should log something that looks sane", function () {
      expect( console.log.calls.argsFor(0)[0].match(/^\d{1,2}\.?\d{1,3}\.?\d?$/) ).not.toBeNull();
    } );

  } );

  describe( "Return 5", function () {

    var foo;

    beforeAll( function () {
      spyOn( window, 'strShift' ).and.callThrough();
      spyOn( window, 'strShuffle' ).and.callThrough();
      foo = Exer.return5();
    } );

    it( "should call strShift three times total", function () {
      expect( strShift.calls.count() ).toEqual(3);
    } );

    it( "should call strShuffle once", function () {
      expect( strShuffle.calls.count() ).toEqual(1);
    } );

    it( "should return the correct result", function () {
      expect( foo ).toEqual("bcc dUB CfD 1H2 3l! @M# n");
    } );

    it( "should contain three statements", function () {
      var work = Exer.return5.toString();
      work = work.match(/^.+?$/mg);  // break into lines
      var i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^\s*\/\//) ) {  // remove comments
          work.splice( i, 1 );
        } else { i++; }
      }
      i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^.+;(?:\s*\/\/.*)?$/) === null ) {  // remove non-statements
          work.splice( i, 1 );
        } else { i++; }
      }
      expect( work.length ).toEqual(3);
    } );

  } );

});

describe("Prompt and Confirm exercises", function () {
  describe("Prompt 1", function () {
    it("should prompt for user input and return it", function () {
      spyOn(window, 'prompt').and.returnValue('42');
      result = Exer.prompt1();
      expect( window.prompt.calls.argsFor(0)[0] ).toEqual("What is the answer to the meaning of life, the universe, and everything?");
      expect( result ).toEqual( '42' );
    });
  });

  describe("Confirm 1", function () {
    it("should get user confirmation and return it", function () {
      spyOn(window, 'confirm').and.returnValue(true);
      result = Exer.confirm1();
      expect( window.confirm.calls.argsFor(0)[0] ).toEqual("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!");
      expect( result ).toEqual( true );
    });
  });
});

describe("Control Flow exercises", function() {

  describe("Control 1", function() {

    it("should ask the user for a number and then log it to the console", function() {
      spyOn(window, 'prompt').and.returnValue('5');
      spyOn(console, 'log');
      Exer.control1();
      expect(window.prompt).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('5');
    });

  });

  describe( "Control 2", function () {

    describe( 'given "hello"', function () {
      var foo, bar;
      beforeAll( function () {
        spyOn( console, 'log' ).and.callThrough();
        spyOn( window, 'strReverse' ).and.callThrough();
        spyOn( window, 'confirm' );
        bar = "hello";
        Exer.control2(bar);
        foo = console.log.calls.argsFor(0)[0];
      } );
      it( "should call strReverse with the proper arguments", function () {
        expect( strReverse ).toHaveBeenCalledWith( bar + foo + bar );
      } );
      it( "should call confirm with the proper arguments", function () {
        expect( confirm ).toHaveBeenCalledWith( strReverse(bar+foo+bar) );
      } );
    } );

    it( "should return true when the user cancels", function () {
      spyOn( window, 'confirm' ).and.returnValue(true);
      expect( Exer.control2() ).toBe(false);
    } );
    it( "should return false when the user confirms", function () {
      spyOn( window, 'confirm' ).and.returnValue(false);
      expect( Exer.control2() ).toBe(true);
    } );

  } );

});

// Annalise
describe( "Conditional Execution exercises", function () {
  describe( "Conditional 1", function () {
    it( "should test things" );
  } );
  describe( "Conditional 2", function () {
    it( "should test things" );
  } );
  describe( "Conditional 3", function () {
    it( "should test things" );
  } );
  describe( "Conditional 4", function () {
    it( "should test things" );
  } );
} );

// Nate
describe("while and dowhile Loops exercises");

describe("Indenting Code exercises", function() {
  describe("Indenting Code 1", function() {
    it("indents the code two spaces for each block", function() {
      var work = Exer.indenting1.toString();
      work = work.match(/^.+?$/mg);  // break into lines
      var i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^\s*\/\//) ) {  // remove comments
          work.splice( i, 1 );
        } else { i++; }
      }
      i = 0;
      var line1Correct = /^  var firstName/.test(work[1]),
          line2Correct = /^  var lastName/.test(work[2]),
          line3Correct = /^  if\(firstName/.test(work[3]),
          line4Correct = /^    lastName \=/.test(work[4]),
          line5Correct = /^  \}/.test(work[5]);

      expect(line1Correct).toBe(true);
      expect(line2Correct).toBe(true);
      expect(line3Correct).toBe(true);
      expect(line4Correct).toBe(true);
      expect(line5Correct).toBe(true);
    });
  });

  describe("Indenting Code 2", function() {
    it("indents the code four spaces for each block", function() {
      var work = Exer.indenting2.toString();
      work = work.match(/^.+?$/mg);  // break into lines
      var i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^\s*\/\//) ) {  // remove comments
          work.splice( i, 1 );
        } else { i++; }
      }
      i = 0;
      var line1Correct = /^    var firstName/.test(work[1]),
          line2Correct = /^    var lastName/.test(work[2]),
          line3Correct = /^    if\(firstName/.test(work[3]),
          line4Correct = /^        lastName \=/.test(work[4]),
          line5Correct = /^    \}/.test(work[5]);

      expect(line1Correct).toBe(true);
      expect(line2Correct).toBe(true);
      expect(line3Correct).toBe(true);
      expect(line4Correct).toBe(true);
      expect(line5Correct).toBe(true);
    });
  });
});

// Annalise
describe("for Loops exercises");

// Nate
describe("Breaking Out of a Loop exercises");

// Zach
describe("Updating Variables Succinctly exercises");

// Annalise
describe( "Dispatching on a Value with switch exercises", function () {
  describe( "Switch 1", function () {

    beforeEach( function () {
      spyOn( console, 'log' ).and.callThrough();
    } );

    it( 'should say "foo"', function () {
      Exer.switch1('cow');
      expect( console.log ).toHaveBeenCalledWith( 'The cow goes "foo"!' );
    } );

    it( 'should say "bar"', function () {
      Exer.switch1('sheep');
      expect( console.log ).toHaveBeenCalledWith( 'The sheep goes "bar"!' );
    } );

    it( 'should say "quux"', function () {
      Exer.switch1('duck');
      expect( console.log ).toHaveBeenCalledWith( 'The duck goes "quux"!' );
    } );

    it( 'But what does the fox say?', function () {
      Exer.switch1('fox');
      expect( console.log ).toHaveBeenCalledWith( 'The fox goes "ring-a-ding-ding-dingding-ding-a-ding-ding"!' );
    } );

  } );
} );

// Nate
describe("Capitalization exercises");

// Zach
describe("Comments exercises");

jsHintSpec();
