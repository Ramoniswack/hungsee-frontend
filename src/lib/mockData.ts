export const TRAINERS = [
  { id: 'marcus-thorne', name: 'Marcus Thorne', role: 'Head Strength Coach', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&h=1000&fit=crop&auto=format', bio: 'With over a decade of experience, Marcus specializes in strength and conditioning.' },
  { id: 'elena-rodriguez', name: 'Elena Rodriguez', role: 'Yoga & Pilates', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1000&fit=crop&auto=format', bio: 'Elena brings mindfulness and elite flexibility training to every single session.' },
  { id: 'david-chen', name: 'David Chen', role: 'HIIT Specialist', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop&auto=format', bio: 'David pushes limits with high-intensity interval training designed to burn fat.' }
];
export const PROGRAMS = [
  { id: 'powerlifting', category: 'Strength', label: 'Strength', title: 'Powerlifting', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1200&fit=crop&auto=format' },
  { id: 'hiit-blast', category: 'Cardio', label: 'Cardio', title: 'HIIT Blast', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&h=1200&fit=crop&auto=format' },
  { id: 'vinyasa-yoga', category: 'Flexibility', label: 'Flexibility', title: 'Vinyasa Yoga', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=1200&fit=crop&auto=format' },
  { id: 'muay-thai', category: 'Combat', label: 'Combat', title: 'Muay Thai', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=1200&fit=crop&auto=format' }
];
export const CLASSES = [
  { id: 'class-1', time: '06:00 AM', duration: '60 MIN', name: 'CrossFit', programId: 'powerlifting', trainerId: 'marcus-thorne', slots: 3, capacity: 20, intensity: 'High', date: 'Mon, Sep 21', status: 'ACTIVE' },
  { id: 'class-2', time: '08:00 AM', duration: '60 MIN', name: 'Vinyasa Yoga', programId: 'vinyasa-yoga', trainerId: 'elena-rodriguez', slots: 12, capacity: 15, intensity: 'Low', date: 'Mon, Sep 21', status: 'ACTIVE' },
  { id: 'class-3', time: '05:30 PM', duration: '45 MIN', name: 'Powerlifting', programId: 'powerlifting', trainerId: 'marcus-thorne', slots: 0, capacity: 20, intensity: 'High', date: 'Mon, Sep 21', status: 'ACTIVE' },
  { id: 'class-4', time: '06:45 PM', duration: '45 MIN', name: 'HIIT Blast', programId: 'hiit-blast', trainerId: 'david-chen', slots: 5, capacity: 20, intensity: 'High', date: 'Mon, Sep 21', status: 'ACTIVE' },
  
  { id: 'class-5', time: '07:00 AM', duration: '60 MIN', name: 'Muay Thai', programId: 'muay-thai', trainerId: 'marcus-thorne', slots: 8, capacity: 15, intensity: 'High', date: 'Tue, Sep 22', status: 'ACTIVE' },
  { id: 'class-6', time: '06:00 PM', duration: '60 MIN', name: 'Vinyasa Yoga', programId: 'vinyasa-yoga', trainerId: 'elena-rodriguez', slots: 2, capacity: 15, intensity: 'Low', date: 'Tue, Sep 22', status: 'ACTIVE' },
  
  { id: 'class-7', time: '06:00 AM', duration: '60 MIN', name: 'HIIT Blast', programId: 'hiit-blast', trainerId: 'david-chen', slots: 1, capacity: 20, intensity: 'High', date: 'Wed, Sep 23', status: 'ACTIVE' },
  { id: 'class-8', time: '08:00 AM', duration: '45 MIN', name: 'Powerlifting', programId: 'powerlifting', trainerId: 'marcus-thorne', slots: 10, capacity: 20, intensity: 'High', date: 'Wed, Sep 23', status: 'ACTIVE' },
  { id: 'class-9', time: '06:30 PM', duration: '60 MIN', name: 'Muay Thai', programId: 'muay-thai', trainerId: 'marcus-thorne', slots: 0, capacity: 15, intensity: 'High', date: 'Wed, Sep 23', status: 'ACTIVE' },
  
  { id: 'vinyasa-1', time: '08:00 AM', duration: '60 MIN', name: 'Vinyasa Yoga', programId: 'vinyasa-yoga', trainerId: 'elena-rodriguez', slots: 12, capacity: 15, intensity: 'Low', date: 'Thu, Sep 24', status: 'ACTIVE' },
  { id: 'class-10', time: '05:30 PM', duration: '45 MIN', name: 'HIIT Blast', programId: 'hiit-blast', trainerId: 'david-chen', slots: 5, capacity: 20, intensity: 'High', date: 'Thu, Sep 24', status: 'ACTIVE' },
  
  { id: 'class-11', time: '06:00 AM', duration: '60 MIN', name: 'CrossFit', programId: 'powerlifting', trainerId: 'marcus-thorne', slots: 15, capacity: 20, intensity: 'High', date: 'Fri, Sep 25', status: 'ACTIVE' },
  { id: 'class-12', time: '05:00 PM', duration: '60 MIN', name: 'Muay Thai', programId: 'muay-thai', trainerId: 'marcus-thorne', slots: 6, capacity: 15, intensity: 'High', date: 'Fri, Sep 25', status: 'ACTIVE' }
];
export const MEMBERSHIPS = [
  { id: 'basic', title: 'Basic', price: 'NPR 3,000', period: '/ mo', features: ['Access to gym floor', 'Locker access', 'Free WiFi'] },
  { id: 'pro', title: 'Pro', price: 'NPR 5,000', period: '/ mo', features: ['Access to gym floor', 'All group classes', '1 PT session/mo', 'Sauna access'] },
  { id: 'elite', title: 'Elite', price: 'NPR 8,000', period: '/ mo', features: ['Unlimited access', 'Unlimited classes', '4 PT sessions/mo', 'Nutrition plan', 'Priority booking'] }
];
