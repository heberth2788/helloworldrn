// Numeric enums
enum Direction {
    Up,     // 0
    Down,   // 1
    Lefth,  // 2
    Right,  // 3
}

const move = Direction.Up;

// Custom numeric enums
enum HttpCode {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500,
}

const code = HttpCode.Success;

// String enums
enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
}

const status = OrderStatus.Pending;

// Constant enums (Better performance, but cannot be used with computed values)
const enum Colors {
    Red,
    Green,
    Blue,
}

const color = Colors.Red;

// Heterogeneous enums
enum MixedEnum {
    No = 0,
    Yes = "YES",
}

const answer = MixedEnum.Yes;