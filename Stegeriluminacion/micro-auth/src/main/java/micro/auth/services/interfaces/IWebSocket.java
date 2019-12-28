package micro.auth.services.interfaces;

import dto.main.MessageWebsocket;
import dto.main.Respuesta;

public interface IWebSocket {

	Respuesta<Boolean> sendMessage(MessageWebsocket messageWebsocket);
	
}
