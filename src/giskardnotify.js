var Base = requireBaseModule();

var GiskardNotify = function() {
    Base.call(this);
    this.exposeApi('post', '/notify/:channel', (req, res) => {
        this.searchChannel(req.params.channel)
            .then((c) => {
                if(req.body.message) {
                    c.send(req.body.message);
                    res.send('ok');
                } else {
                    res.send('Missing message.');
                }
            })
            .catch(ex => {
                res.send('channel not found');
            })
    });
};

module.exports = Base.setup(GiskardNotify);
