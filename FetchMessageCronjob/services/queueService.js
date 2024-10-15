const { queuePush } = require("../queues/queue");

/**
 * NewMailFetcher - Function to push new email data to the message queue
 * This function takes in email data and pushes it to a specified message queue using the exchange and routing key.
 * @param {object} data - The email data to be sent to the queue
 * @returns {Promise<void>} - This function returns a promise since queuePush is asynchronous
 */
const NewMailFetcher = async (data) => {

    const exchange = 'MailzyExchange';

    const routingKey = 'NewMessage';

    const message = data;

    // Asynchronously push the email message to the queue using the exchange and routing key
    await queuePush({ exchange, routingKey, message });

};


module.exports = { NewMailFetcher };