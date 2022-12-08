import { MessageService } from './message.service';

describe('Message Servcie', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService()
  })

  it('should be empty when it started', () => {
    expect(service.messages.length).toBe(0);
  })

  it('should be added when a new message is added', () => {
    let lenghtPrev = service.messages.length;

    service.add('Message 1');
    let lenghtAfter = service.messages.length;

    expect(lenghtAfter).toBe(lenghtPrev + 1);
  })

  it('should delete all messages when "clear" is called', () => {
    service.add('Message 1');
    service.add('Message 2');
    service.add('Message 3');
    service.add('Message 4');

    service.clear();

    expect(service.messages.length).toBe(0);
  })
})
