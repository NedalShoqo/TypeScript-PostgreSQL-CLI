import {sequelize } from './config/dbconfig.js';
import {program} from './cli/commands.js';

async function main() {
    await sequelize.sync();
    program.parse(process.argv);
}
main();
