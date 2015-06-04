var pager, PagerDuty;

PagerDuty = require('pagerduty');

exports.handler = function(event, context) {
  console.log(JSON.stringify(event.Records[0].Sns));
  pager = new PagerDuty({
    serviceKey: 'PAGER_DUTY_API_KEY_HERE' // required
  });
  
  pager.create({
    description: event.Records[0].Sns.Subject,
    details: JSON.parse(event.Records[0].Sns.Message),
    callback: function(err, response) {
      if (err) {
        context.fail("Something went wrong.");
      } else {
        context.succeed("Sent event to pagerduty!");
      }
    }
  });
};
