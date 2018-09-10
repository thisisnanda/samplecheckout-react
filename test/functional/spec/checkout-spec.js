var basedir = require('path').resolve(__dirname, '../');
var Nemo = require('nemo');
var nemo;

describe('Merchant Checkout flow', function () {
    before(function (done) {
        nemo = Nemo(basedir, function (err) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
    after(function (done) {
        nemo.driver.quit().then(done);
    });

    function scrollElementAboveFooter(element) {
        function getToValidPosition(location) {
            const footerHeight = 100;
            const posY = location.y + footerHeight;
            const posX = location.x;

            return nemo.driver.executeScript('scrollTo(' + posX + ',' + posY + ');');
        }

        return element.getLocation()
            .then(getToValidPosition);
    }

    it('successful flow', function (done) {
        //login
        nemo.driver.get(nemo.data.baseUrl);
        nemo.view._waitVisible('css:.nemo_email').sendKeys('ashok@paypal.com');
        nemo.view._waitVisible('css:.nemo_password').sendKeys('1234');
        nemo.view._waitVisible('css:.buttonClass')
            .then(scrollElementAboveFooter)
            .then(nemo.view._waitVisible('css:.buttonClass').click())
            .then(nemo.view._waitVisible('css:.review'))
            .then(nemo.view._waitVisible('css:.radioBackground').click())
            .then(nemo.view._waitVisible('css:.buttonClass').click())
            .then(nemo.view._waitVisible('css:.donePage'))
        nemo.driver.sleep(3000).then(function () {
            done();
        }, function (err) {
            done(err);
        })
    });

    it('login failure', function (done) {
        nemo.driver.get(nemo.data.baseUrl);
        nemo.view._waitVisible('css:.nemo_email').sendKeys('sachin');
        nemo.view._waitVisible('css:.nemo_password').sendKeys('1234');
        nemo.view._waitVisible('css:.buttonClass')
            .then(scrollElementAboveFooter)
            .then(nemo.view._waitVisible('css:.buttonClass').click())
            .then(nemo.view._waitVisible('css:.buttonClass'))
        nemo.driver.sleep(3000).then(function () {
            done();
        }, function (err) {
            done(err);
        })
    });

    it('Should not go to done page if no payment options selected', function (done) {
        nemo.driver.get(nemo.data.baseUrl);
        nemo.view._waitVisible('css:.nemo_email').sendKeys('ashok@paypal.com');
        nemo.view._waitVisible('css:.nemo_password').sendKeys('1234');
        nemo.view._waitVisible('css:.buttonClass')
            .then(scrollElementAboveFooter)
            .then(nemo.view._waitVisible('css:.buttonClass').click())
            .then(nemo.view._waitVisible('css:.review'))
            .then(nemo.view._waitVisible('css:.buttonClass').click())
            .then(nemo.view._waitVisible('css:.review'))
        nemo.driver.sleep(3000).then(function () {
            done();
        }, function (err) {
            done(err);
        })
    });
});
