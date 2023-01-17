import winston from "winston";

const { combine, timestamp, label, printf, simple, colorize } = winston.format;
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}] : ${message}`;
});

const logger = winston.createLogger({
  //* 로그 출력 형식 정의
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    label({ label: "[LOGGER]" }),
    simple(), // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
    colorize({ all: true }), //색상
    logFormat
  ),
});

//if (process.env.NODE_ENV !== 'production') {
logger.add(
  new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize()),
  })
);
//}
export { logger };
