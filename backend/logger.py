import logging
import http.client
from aiohttp import TraceConfig

async def on_request_start(session, context, params):
    logging.getLogger('aiohttp.client').debug(f'Starting request <{params}>')

logging.basicConfig(level=logging.DEBUG)
trace_config = TraceConfig()
trace_config.on_request_start.append(on_request_start)

http.client.HTTPConnection.debuglevel = 1

logging.getLogger().setLevel(logging.DEBUG)
requests_log = logging.getLogger("requests.packages.urllib3")
requests_log.setLevel(logging.DEBUG)
