import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { validateNewUser } from './users';

if (Meteor.isServer) {

  describe('Users', function() {
  
    it('should allow valid email address', function () {
      const testUser = {
        emails: [{address: 'test@example.com'}]
      };
      const res = validateNewUser(testUser);
      expect(res).toBe(true);
    });

    it('should reject invalid email', function() {
      const testUser = {
        emails: [{address: 'test@ex@mple.com'}]
      };
      expect(() => {
        validateNewUser(testUser);
      }).toThrow();

    })
  
  })
} // End Is Server
