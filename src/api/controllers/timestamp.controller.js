const timestampService = require('../../services/timestamp.service');

/**
 * Returns timestamp in unix and utc formats
 */
exports.getTimestamp = (req, res) => {
    try {
        const { time } = req.params;

        const timestamp = timestampService.getTimestamp(time);

        return res.status(200).json(timestamp);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
