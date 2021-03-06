import logging
import http.client
from aiohttp import TraceConfig

"""
Logger for the app
"""

async def on_request_start(session, context, params):
    logging.getLogger('aiohttp.client').debug(f'Starting request <{params}>')


logging.basicConfig(
    filename='logs.log',
    level=logging.DEBUG,
    format="%(asctime)s %(message)s",
)
trace_config = TraceConfig()
trace_config.on_request_start.append(on_request_start)

http.client.HTTPConnection.debuglevel = 1

requests_log = logging.getLogger("requests.packages.urllib3")
requests_log.setLevel(logging.DEBUG)
