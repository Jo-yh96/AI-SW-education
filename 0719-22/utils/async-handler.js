module.exports = (requsetHandler) => {
    return async (req, res, next) => {
        try {
            await requsetHandler(req,res);
        }catch(err) {
            next(err);
        }
    }
}